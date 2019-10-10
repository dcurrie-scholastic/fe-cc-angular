import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { APIHost } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private _person: BehaviorSubject<Person> = new BehaviorSubject(null);
  private _people: BehaviorSubject<Array<Person>> = new BehaviorSubject([]);

  private _teacher: BehaviorSubject<Teacher> = new BehaviorSubject(null);
  private _teachers: BehaviorSubject<Array<Teacher>> = new BehaviorSubject([]);

  private _student: BehaviorSubject<Student> = new BehaviorSubject(null);
  private _students: BehaviorSubject<Array<Student>> = new BehaviorSubject([]);

  public get person(): Observable<Person> { return this._person.asObservable(); }
  public get people(): Observable<Array<Person>> { return this._people.asObservable(); }

  public get teacher(): Observable<Teacher> { return this._teacher.asObservable(); }
  public get teachers(): Observable<Array<Teacher>> { return this._teachers.asObservable(); }

  public get student(): Observable<Student> { return this._student.asObservable(); }
  public get students(): Observable<Array<Student>> { return this._students.asObservable(); }

  constructor(private http: HttpClient) { }

  public getPeople(): Observable<Array<Person>> {
    return this.http.get(`${APIHost}/people`).pipe(map(
      (people: Array<Person>) => {
        this._people.next(people);
        return people;
      },
      (error: Error) => console.error(error)
    ));
  }

  public getPerson(id: string): Observable<Person> {
    return this.http.get(`${APIHost}/people/${id}`).pipe(map(
      (person: Person) => {
        this._person.next(person);

        person.role === 'Teacher' 
          ? this._teacher.next(person as Teacher) 
          : this._student.next(person as Student);
        
        return person;
      },
      (error: Error) => console.error(error)
    ));
  }

  public getTeachers(): Observable<Array<Teacher>> {
    return this.http.get(`${APIHost}/people?role=Teacher`).pipe(map(
      (teachers: Array<Teacher>) => {
        this._teachers.next(teachers);
        return teachers;
      },
      (error: Error) => console.error(error)
    ));
  }

  public getStudents(): Observable<Array<Student>> {
    return this.http.get(`${APIHost}/people?role=Student`).pipe(map(
      (students: Array<Student>) => {
        this._students.next(students);
        return students;
      },
      (error: Error) => console.error(error)
    ));
  }
}
