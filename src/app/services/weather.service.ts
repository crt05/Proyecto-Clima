import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '9611f0560b5eb7baec01229563b018f8';
  URI: string='';

  constructor(private http: HttpClient) {
    this.URI= `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&id=`;
   }

   getWeather(cityCode: string){
    return this.http.get(`${this.URI}${cityCode}`);

   }
}
