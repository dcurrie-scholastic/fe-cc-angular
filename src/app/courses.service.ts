import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { APIHost } from './app.config';
import { PeopleService } from './people.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private _course: BehaviorSubject<Course> = new BehaviorSubject(null);
  private _courses: BehaviorSubject<Array<Course>> = new BehaviorSubject([]);

  public get course(): Observable<Course> { return this._course.asObservable(); }
  public get courses(): Observable<Array<Course>> { return this._courses.asObservable(); }

  constructor(private http: HttpClient, private peopleService: PeopleService) { }

  public getCourses(): Observable<Array<Course>> {
    return this.http.get(`${APIHost}/courses`).pipe(map(
      (courses: Array<Course>) => {
        this._courses.next(courses);
        return courses;
      },
      (error: Error) => console.error(error)
    ));
  }

  public getCourse(id: string): Observable<Course> {
    return this.http.get(`${APIHost}/courses/${id}`).pipe(map(
      (course: Course) => {
        this._course.next(course);
        return course;
      },
      (error: Error) => console.error(error)
    ));
  }
}
