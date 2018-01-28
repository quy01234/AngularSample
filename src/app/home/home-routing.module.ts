import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MainDetailComponent } from './main-detail/main-detail.component';

const routes: Routes = [{
  path: '',
  component: MainComponent
},
{
  path: ':id',
  component: MainDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
