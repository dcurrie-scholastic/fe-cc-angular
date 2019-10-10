declare interface DataObject {
    id: string;
}

declare interface School extends DataObject {
    name: string;
    courses: Array<string>;
    coursesData?: Array<Course>;
}

declare interface Course extends DataObject {
    school: string;
    subject: string;
    teacher: string;
    teacherData?: Teacher;
    students: Array<string>;
    studentsData?: Array<Student>;
}

declare interface Person extends DataObject {
    name: {
        first: string;
        last: string;
    };
    role: 'Student' | 'Teacher';
    courses: Array<string>;
    coursesData?: Array<Course>;
}

declare interface Teacher extends Person {
    role: 'Teacher';
}

declare interface Student extends Person {
    role: 'Student';
}