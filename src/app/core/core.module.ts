import { NgModule } from '@angular/core';

import { CourseResolver } from './courses/course.resolver';
import { CoursesResolver } from './courses/courses.resolver';
import { CoursesService } from './courses/courses.service';

import { PeopleResolver } from './people/people.resolver';
import { PeopleService } from './people/people.service';
import { PersonResolver } from './people/person.resolver';
import { StudentsResolver } from './people/students.resolver';
import { TeachersResolver } from './people/teachers.resolver';

import { SchoolResolver } from './schools/school.resolver';
import { SchoolsResolver } from './schools/schools.resolver';
import { SchoolsService } from './schools/schools.service';

@NgModule({
  providers: [
    CourseResolver, 
    CoursesResolver, 
    CoursesService, 
    PeopleResolver, 
    PeopleService, 
    PersonResolver, 
    SchoolResolver,
    SchoolsResolver,
    SchoolsService,
    StudentsResolver,
    TeachersResolver
  ]
})
export class CoreModule { }
