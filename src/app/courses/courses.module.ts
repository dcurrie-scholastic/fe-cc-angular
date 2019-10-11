import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  declarations: [CourseDetailsComponent],
  imports: [CommonModule, CoreModule, SharedModule, CoursesRoutingModule]
})
export class CoursesModule { }
