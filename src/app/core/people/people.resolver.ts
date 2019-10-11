import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { PeopleService } from './people.service';

@Injectable()
export class PeopleResolver implements Resolve<Array<Person>> {
  constructor(private peopleService: PeopleService) {}

  resolve(): Observable<Array<Person>> {
    return this.peopleService.getPeople();
  }
}