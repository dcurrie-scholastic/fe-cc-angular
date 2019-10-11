import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { CoursesService } from 'src/app/core/courses/courses.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
  public loaded = false;
  public person: Person;

  constructor(private activatedRoute: ActivatedRoute, private coursesService: CoursesService) { }

  public ngOnInit(): void {
    this.person = this.activatedRoute.snapshot.data.person;
    this.person.coursesData = [];

    forkJoin(this.person.courses.map((course: string) => 
              this.coursesService.getCourse(course).pipe(map((courseData: Course) => 
                this.person.coursesData.push(courseData)))))
      .subscribe(() => this.loaded = true);                
  }
}
