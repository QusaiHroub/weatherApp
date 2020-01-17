import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { WeatherService } from './../../services/weather.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    cityName: string;
    cities: any = <any>[];
    citiesObj: any = <any>{};

    @Input() display: string = "none";

    constructor(private weatherService: WeatherService, private el: ElementRef) {
      this.searchCities();
    }

    ngOnInit() {
    }

    searchCities() {
      this.weatherService.findN('31','35')
        .subscribe(data => {
          this.citiesObj = data;
          this.cities = this.citiesObj.list;
          console.log(this.cities);
        }, err => {
            alert('Failed to get weather.' );
        }, () => {})
    }
}
