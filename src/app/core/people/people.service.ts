import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { APIHost } from 'src/app/app.config';

@Injectable()
export class PeopleService {
  constructor(private http: HttpClient) { }

  public getPeople(): Observable<Array<Person>> {
    return this.http.get(`${APIHost}/people`).pipe(map(
      (people: Array<Person>) => people,
      (error: Error) => console.error(error)
    ));
  }

  public getPerson(id: string): Observable<Person> {
    return this.http.get(`${APIHost}/people/${id}`).pipe(map(
      (person: Person) => person,
      (error: Error) => console.error(error)
    ));
  }

  public getTeachers(): Observable<Array<Teacher>> {
    return this.http.get(`${APIHost}/people?role=Teacher`).pipe(map(
      (teachers: Array<Teacher>) => teachers,
      (error: Error) => console.error(error)
    ));
  }

  public getStudents(): Observable<Array<Student>> {
    return this.http.get(`${APIHost}/people?role=Student`).pipe(map(
      (students: Array<Student>) => students,
      (error: Error) => console.error(error)
    ));
  }
}
