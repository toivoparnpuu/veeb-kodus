const express = require('express');
const config = require('./config');
const db = require('./db');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'public')));
app.get('/api/v1/curriculum', (req, res) => {
  res.json(db["db"]["curriculum"]);
});

app.get('/api/v1/modules', (req, res) => {
  res.json(db["db"]["modules"]);
});
app.get('/api/v1/modules/:id', (req, res) => {
  res.json(db["db"]["modules"][req.params.id]);
});

app.get('/api/v1/subjects', (req, res) => {
  const subjects = [];
  const modules = db["db"]["modules"];
  for (const moduleId in modules) {
    const module = modules[moduleId];
    for (const subject of module.subjects) {
      subjects.push(subject);
    }
  }
  res.json(subjects);
});

app.get('/api/v1/subjects/:id', (req, res) => {
  const subjects = [];
  const modules = db["db"]["modules"];
  for (const moduleId in modules) {
    const module = modules[moduleId];
    for (const subject of module.subjects) {
      subjects.push(subject);
    }
  }
  res.json(subjects[req.params.id]);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is running on  http://localhost:${port}${config.baseUrl}`);
});

