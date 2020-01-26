import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { WeatherService } from './../../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {

  loc: string;
  currentWeather: any = <any>{};
  forecast: any = <any>[];
  forecastObj: any = <any>{};
  menuDisplay: string = "none";
  logInDisplay: string = "none";
  weather: any = <any>[];
  weatherObj: any = <any>{};
  main: any = <any>{};

  constructor(private weatherService: WeatherService,
              private datePipe: DatePipe) {

    this.loc = this.weatherService.getCurrentLoc();
    if (!this.loc) {
        this.loc = this.weatherService.getDefaultLoc();
    }
    this.searchWeather(this.loc);
  }

  ngOnInit() {
  }

  getCurrentDate(){
      return this.datePipe.transform(new Date(), 'EE dd MMMM hh:mm');
  }

  round(x){
    return Math.round(x);
  }

  searchWeather(loc: string) {
    this.currentWeather = {};
    this.weatherService.getCurrentWeather(loc)
      .subscribe(res => {
        this.currentWeather = res;
        this.main = this.currentWeather.main;
        this.weather = this.currentWeather.weather;
        this.weatherObj = this.weather[0];
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
        this.forecastObj = data;
        this.forecast = this.filter(this.forecastObj.list);
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
             return !(index % 8) && index != 0;
         }
     );
  }

  displayMenu() {
      if(this.menuDisplay == "none") {
          this.menuDisplay = "block";
      } else {
          this.menuDisplay = "none";
      }
  }

  displayLogInForm() {
      if(this.logInDisplay == "none") {
          this.logInDisplay = "block";
      } else {
          this.logInDisplay = "none";
      }
  }

  onLocChanged(newLoc: string) {
      this.weatherService.setCurrentLoc(newLoc);
      this.loc = this.weatherService.getCurrentLoc();
      this.searchWeather(this.loc);
      this.menuDisplay = "none";
  }

}
