import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { PeopleService } from 'src/app/core/people/people.service';
import { SchoolsService } from 'src/app/core/schools/schools.service';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})
export class CoursesTableComponent implements OnInit {
  @Input() public header: string;
  @Input() public courses: Array<Course>;

  public loaded = false;

  constructor(private activatedRoute: ActivatedRoute, 
              private peopleService: PeopleService,
              private schoolsService: SchoolsService) { }

  public ngOnInit(): void {
    if (!this.header) {
      this.header = this.activatedRoute.snapshot.data.header;
    }
    
    if (!this.courses) {
      this.courses = this.activatedRoute.snapshot.data.courses;
    }

    forkJoin([
      forkJoin(this.courses.map((course: Course) => this.schoolsService.getSchool(course.school).pipe(map((school: School) => course.schoolData = school)))),
      forkJoin(this.courses.map((course: Course) => this.peopleService.getPerson(course.teacher).pipe(map((teacher: Teacher) => course.teacherData = teacher))))
    ]).subscribe(() => this.loaded = true);
  }
}
