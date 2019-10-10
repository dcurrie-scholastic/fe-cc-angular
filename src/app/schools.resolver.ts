import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { SchoolsService } from "./schools.service";

@Injectable({
  providedIn: 'root'
})
export class SchoolsResolver implements Resolve<Array<School>> {
  constructor(private schoolsService: SchoolsService) {}

  resolve(): Observable<Array<School>> {
    return this.schoolsService.getSchools();
  }
}