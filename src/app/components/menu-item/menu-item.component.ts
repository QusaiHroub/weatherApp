import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() city: any;
  @Output() locChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  round(x){
    return Math.round(x);
  }

  getIcon(icon: string) {
      return "url(http://openweathermap.org/img/wn/" + icon + "@2x.png)";
  }

  changeLoc(newLoc: string) {
    this.locChanged.emit(newLoc);
  }

}
