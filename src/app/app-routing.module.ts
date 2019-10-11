import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'schools',
    loadChildren: () => import('./schools/schools.module').then(mod => mod.SchoolsModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(mod => mod.CoursesModule)
  },
  {
    path: 'people',
    loadChildren: () => import('./people/people.module').then(mod => mod.PeopleModule)
  },
  { path: '',
    redirectTo: '/schools',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
