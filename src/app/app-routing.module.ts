import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './CRUD/category/category.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path: 'home',component: HomeComponent},
  {path:'form',component:FormComponent},
  { path: 'reactive-form', component: ReactiveFormComponent },
  {path :'Category',component:CategoryComponent},
  { path:'**',component:PageNotFoundComponent}      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
