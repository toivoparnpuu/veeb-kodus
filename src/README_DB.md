# Üldine struktuur

## modules

sisaldab kõiki mooduleid

### subjects

sisaldab kõiki aineid

#### subject

sisaldab ühte ainet

##### subject (subject sees)

sisaldab aine nime ja sisu


## näide andmete kuvamisest konsoolis

```javascript
Object { optional: false, subject: {…}, studyYearNumber: 3, autumn: true, spring: false, assessment: "A", subjectId: 30413 }



// Väljund:
subject.subject.nameEt (assessment, credit)

```



## Proobleemid

* [ ] kuidas pärida välja kõik ained üle moodulite?
* [ ] kuidas pärida välja kõik ained üle moodulite, mis on valikained?
* [ ] kuidas pärida välja kõik ained üle moodulite, mis on valikained ja mis on 3. aastal?
* [ ] kuidas pärida välja kõik ained üle moodulite, mis on valikained ja mis on 3. aastal ja mis on sügisel?
* [ ] kuidas pärida välja kõik ained üle moodulite, mis on valikained ja mis on 3. aastal ja mis on sügisel ja mis on hinnatud A-ga?
* [ ] kuidas pärida välja kõik ained üle moodulite, mis on valikained ja mis on 3. aastal ja mis on sügisel ja mis on hinnatud A-ga ja mis on 6 EAP-d?
