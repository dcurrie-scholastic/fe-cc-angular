import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { PeopleService } from './people.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsResolver implements Resolve<Array<Student>> {
  constructor(private peopleService: PeopleService) {}

  resolve(): Observable<Array<Student>> {
    return this.peopleService.getStudents();
  }
}