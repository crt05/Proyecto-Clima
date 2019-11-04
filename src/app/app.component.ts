import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cityCode1: string ='';
  selectChangeHandler(event: any){this.cityCode1=event.target.value;
        console.log(this.cityCode1); }
  weather;
  constructor(private wetherServices: WeatherService){}
  
  ngOnInit(){



  }

  getWeather(cityCode: string){
    this.wetherServices.getWeather(cityCode)
.subscribe(
  res=>{

    console.log(res);
    this.weather=res},
  err=>console.log(err)
  )
  }

  submitLocation(cityCode: HTMLInputElement){
    this.getWeather(cityCode.value);
    cityCode.value='';
    return false;

  }


}
