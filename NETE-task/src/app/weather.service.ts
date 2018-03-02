import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
@Injectable()
export class WeatherService {

  apiKey=this.newMethod();
  url;


  constructor(private http:Http) {
    this.url='http://api.openweathermap.org/data/2.5/forecast?q=';
   }

  private newMethod() {
    return 'aa20aba17dbd2a1525a0b38909159c93';
  }

   getweather(city,code){
    return this.http.get(this.url + city + ',' + code + '&APPID=' + this.apiKey).map( res => res.json());
   }
}
