import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { PeopleService } from 'src/app/core/people/people.service';
import { SchoolsService } from 'src/app/core/schools/schools.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  public loaded = false;
  public course: Course;

  constructor(private activatedRoute: ActivatedRoute, 
              private peopleService: PeopleService,
              private schoolsService: SchoolsService) { }

  public ngOnInit(): void {
    this.course = this.activatedRoute.snapshot.data.course;
    this.course.studentsData = [];

    forkJoin([
      this.schoolsService.getSchool(this.course.school).pipe(map((school: School) => this.course.schoolData = school)),
      this.peopleService.getPerson(this.course.teacher).pipe(map((teacher: Teacher) => this.course.teacherData = teacher)),
      this.course.students.map((student: string) => 
        this.peopleService.getPerson(student).pipe(map((studentData: Student) => 
          this.course.studentsData.push(studentData))).subscribe())
    ]).subscribe(() => this.loaded = true);
  }
}
