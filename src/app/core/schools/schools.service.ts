import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { APIHost } from 'src/app/app.config';

@Injectable()
export class SchoolsService {
  constructor(private http: HttpClient) { }

  public getSchools(): Observable<Array<School>> {
    return this.http.get(`${APIHost}/schools`).pipe(map(
      (schools: Array<School>) => schools,
      (error: Error) => console.error(error)
    ));
  }

  public getSchool(id: string): Observable<School> {
    return this.http.get(`${APIHost}/schools/${id}`).pipe(map(
      (school: School) => school,
      (error: Error) => console.error(error)
    ));
  }
}
