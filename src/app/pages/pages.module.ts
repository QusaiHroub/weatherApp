import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component'

import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ],
  exports: [
      ComponentsModule
  ]
})
export class PagesModule { }
