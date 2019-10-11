import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { CoursesService } from './courses.service';

@Injectable()
export class CourseResolver implements Resolve<Course> {
  constructor(private coursesService: CoursesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Course> {
    return this.coursesService.getCourse(route.paramMap.get('id'));
  }
}