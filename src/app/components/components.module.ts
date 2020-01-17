import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListItemComponent } from './list-item/list-item.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListItemComponent, MenuComponent, MenuItemComponent, FilterPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
      ListItemComponent,
      MenuComponent,
      FilterPipe
  ]
})
export class ComponentsModule { }
