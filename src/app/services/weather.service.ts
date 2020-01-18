import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  currentLoc: string = "Ar Ramadin,PS";
  currentObjForDet: any;

  constructor(private http: HttpClient) { }

  getCurrentWeather(loc: string) {
    return this.http.get(`${environment.apiUrl}/weather?q=${loc}&appid=${environment.apiKey}`)
  }

  getForecast(loc: string) {
    return this.http.get(`${environment.apiUrl}/forecast?q=${loc}&appid=${environment.apiKey}`)
  }

  find(data: string) {
      return this.http.get(`${environment.apiUrl}/find?q=${data}&appid=${environment.apiKey}`)
  }

  findN(lat: string, lon: string) {
      return this.http.get(`${environment.apiUrl}/find?lat=${lat}&lon=${lon}&appid=${environment.apiKey}&cnt=24`)
  }

  getCurrentLoc() {
      return this.currentLoc;
  }

  setCurrentLoc(loc: string) {
      this.currentLoc = loc;
  }

  getCurrentObjForDet() {
      return this.getCurrentObjForDet;
  }

  setCurrentObjForDet(currentObjForDet: any) {
      this.currentObjForDet = currentObjForDet;
  }

}
