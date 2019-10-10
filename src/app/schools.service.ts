import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { APIHost } from './app.config';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {
  private _school: BehaviorSubject<School> = new BehaviorSubject(null);
  private _schools: BehaviorSubject<Array<School>> = new BehaviorSubject([]);

  public get school(): Observable<School> { return this._school.asObservable(); }
  public get schools(): Observable<Array<School>> { return this._schools.asObservable(); }

  constructor(private http: HttpClient, private coursesService: CoursesService) { }

  public getSchools(): Observable<Array<School>> {
    return this.http.get(`${APIHost}/schools`).pipe(map(
      (schools: Array<School>) => {
        this._schools.next(schools);
        return schools;
      },
      (error: Error) => console.error(error)
    ));
  }

  public getSchool(id: string): Observable<School> {
    return this.http.get(`${APIHost}/schools/${id}`).pipe(map(
      (school: School) => {
        this._school.next(school);
        return school;
      },
      (error: Error) => console.error(error)
    ));
  }
}
