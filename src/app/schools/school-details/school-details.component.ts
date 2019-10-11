import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { CoursesService } from 'src/app/core/courses/courses.service';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.scss']
})
export class SchoolDetailsComponent implements OnInit {
  public loaded = false;
  public school: School;

  constructor(private activatedRoute: ActivatedRoute, private coursesService: CoursesService) { }

  public ngOnInit(): void {
    this.school = this.activatedRoute.snapshot.data.school;
    this.school.coursesData = [];

    forkJoin(
      this.school.courses.map((course: string) => 
        this.coursesService.getCourse(course).pipe(map((courseData: Course) => 
          {
            this.school.coursesData.push(courseData);
            courseData.schoolData = this.school;
          })))).subscribe(() => this.loaded = true);
  }
}
