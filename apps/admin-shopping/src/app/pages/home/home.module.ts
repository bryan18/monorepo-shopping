import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// components
import { HomeComponent } from './component/home/home.component';

// routing
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
