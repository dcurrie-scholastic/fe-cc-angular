import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesResolver implements Resolve<Array<Course>> {
  constructor(private coursesService: CoursesService) {}

  resolve(): Observable<Array<Course>> {
    return this.coursesService.getCourses();
  }
}