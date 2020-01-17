import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() day: any;

  constructor() { }

  ngOnInit() {
  }

  round(x){
    return Math.round(x);
  }

  getIcon(icon: string) {
      return "url(http://openweathermap.org/img/wn/" + icon + "@2x.png)";
  }

}
