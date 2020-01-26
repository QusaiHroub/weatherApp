import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListItemComponent } from './list-item/list-item.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListItemComponent, MenuComponent, MenuItemComponent, FilterPipe, LogInComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
      ListItemComponent,
      MenuComponent,
      FilterPipe,
      LogInComponent
  ]
})
export class ComponentsModule { }
