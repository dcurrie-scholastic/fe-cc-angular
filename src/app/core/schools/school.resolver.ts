import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { SchoolsService } from "./schools.service";

@Injectable()
export class SchoolResolver implements Resolve<School> {
  constructor(private schoolsService: SchoolsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<School> {
    return this.schoolsService.getSchool(route.paramMap.get('id'));
  }
}