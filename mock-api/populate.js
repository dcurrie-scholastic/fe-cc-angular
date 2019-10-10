const fs = require('fs');
const path = require('path');

const fileName = "./db.json";
const db = require(fileName);
const data = JSON.parse(JSON.stringify(db));

data.schools.forEach((school, index) => {
    const firstCourseIndex = index * 3;
    school.courses = [];

    for (let i = firstCourseIndex; i < firstCourseIndex + 3; i++) {
        data.courses[i].school = school.id;
        school.courses.push(data.courses[i].id);
    }
});

data.people.forEach((person) => person.courses = []);

data.courses.forEach((course, index) => {
    course.students = [];

    const teacher = data.people.filter((person) => person.role === 'Teacher')[Math.floor(index / 3)];
    teacher.courses.push(course.id);
    course.teacher = teacher.id;

    const firstStudentIndex = index * 3;
    const students = data.people.filter((person) => person.role === 'Student');

    for (let i = firstStudentIndex; i < firstStudentIndex + 3; i++) {
        const student = students[i];
        student.courses.push(course.id);
        course.students.push(student.id);
    }
});

fs.writeFile(path.resolve(__dirname, fileName), JSON.stringify(data, null, 2), (err) => {
  if (err) return console.error(err);
  console.log(JSON.stringify(db, null, 2));
  console.log('writing to ' + fileName);
});