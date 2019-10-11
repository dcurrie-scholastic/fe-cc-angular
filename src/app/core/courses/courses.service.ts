import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { APIHost } from 'src/app/app.config';

@Injectable()
export class CoursesService {
  constructor(private http: HttpClient) { }

  public getCourses(): Observable<Array<Course>> {
    return this.http.get(`${APIHost}/courses`).pipe(map(
      (courses: Array<Course>) => courses,
      (error: Error) => console.error(error)
    ));
  }

  public getCourse(id: string): Observable<Course> {
    return this.http.get(`${APIHost}/courses/${id}`).pipe(map(
      (course: Course) => course,
      (error: Error) => console.error(error)
    ));
  }
}
