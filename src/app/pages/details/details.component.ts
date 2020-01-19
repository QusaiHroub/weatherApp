import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from './../../services/weather.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() data: string;
  currentWeather: any = <any>{};
  loc: string;
  weather: any = <any>[];
  weatherObj: any = <any>{};
  main: any = <any>{};
  wind: any = <any>{};

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) {
      this.loc = this.weatherService.getCurrentLoc();
      if (!this.loc) {
          this.loc = this.weatherService.getDefaultLoc();
      }
      this.searchWeather(this.loc);
  }

  ngOnInit() {
    this.route.params.subscribe( params =>
        this.data = params['data']
    );
  }

  searchWeather(loc: string) {
    this.currentWeather = {};
    this.weatherService.getCurrentWeather(loc)
      .subscribe(data => {
          if (this.data == '0') {
              this.currentWeather = data;
              this.main = this.currentWeather.main;
              this.wind = this.currentWeather.wind;
              this.weather = this.currentWeather.weather;
              this.weatherObj = this.weather[0];
          }
      }, err => {
        if (err.error && err.error.message) {
          alert(err.error.message);
          return;
        }
        alert('Failed to get weather.');
      }, () => {
          this.searchForecast(loc);
      })
  }

  searchForecast(loc: string) {
    this.weatherService.getForecast(loc)
      .subscribe(data => {
          if (this.data != '0') {
              this.currentWeather = data;
              this.currentWeather = this.filter(this.currentWeather.list)[parseInt(this.data, 10) - 1];
              this.main = this.currentWeather.main;
              this.weather = this.currentWeather.weather;
              this.weatherObj = this.weather[0];
          }
      }, err => {
          alert('Failed to get weather.');
      }, () => {})
  }

  getIcon(icon: string) {
      return "url(http://openweathermap.org/img/wn/" + icon + "@2x.png)";
  }

  filter(list: any) {
     return list.filter
     (
         (item,index) =>
         {
             return !(index%8) && index != 0;
         }
     );
  }


}
