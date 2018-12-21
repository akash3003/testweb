import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MySliderComponent } from './my-slider/my-slider.component';

const routes: Routes = [
  {
   path:"",
   component: MySliderComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
