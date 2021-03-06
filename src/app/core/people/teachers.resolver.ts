import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { PeopleService } from './people.service';

@Injectable()
export class TeachersResolver implements Resolve<Array<Teacher>> {
  constructor(private peopleService: PeopleService) {}

  resolve(): Observable<Array<Teacher>> {
    return this.peopleService.getTeachers();
  }
}