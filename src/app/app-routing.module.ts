import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeftSideComponent } from './left-side/left-side.component';
import { HomeComponent } from './home/home.component';
import { ListPassComponent } from './list-pass/list-pass.component';
import { SetPassComponent } from './set-pass/set-pass.component';
import { RightSideComponent } from './right-side/right-side.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'left', component: LeftSideComponent
  },
  {
    path: 'right', component: RightSideComponent
  },
  {
    path: 'listPass', component: ListPassComponent
  },
  {
    path: 'setPassForm', component: SetPassComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
