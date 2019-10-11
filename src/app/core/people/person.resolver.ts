import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { PeopleService } from './people.service';

@Injectable()
export class PersonResolver implements Resolve<Person> {
  constructor(private peopleService: PeopleService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Person> {
    return this.peopleService.getPerson(route.paramMap.get('id'));
  }
}