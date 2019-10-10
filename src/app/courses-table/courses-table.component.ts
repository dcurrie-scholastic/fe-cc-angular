import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../people.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})
export class CoursesTableComponent implements OnInit {
  public loaded = false;
  public courses: Array<Course> = [];

  constructor(private activatedRoute: ActivatedRoute, private peopleService: PeopleService) { }

  public ngOnInit(): void {
    this.courses = this.activatedRoute.snapshot.data.courses;
    forkJoin(this.courses.map((course: Course) => 
      this.peopleService.getPerson(course.teacher)
        .pipe(map((teacher: Teacher) =>  course.teacherData = teacher))))
        .subscribe(() => this.loaded = true);
  }
}
