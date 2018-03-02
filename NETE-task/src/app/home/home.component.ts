import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  current;
  location={
    city:'rockville',
    code:'us'

  };
  mylocation:any;
  weather:any;
  value:any;
  local:any;
  tempmax:any;
  tempmax1:any;
  tempmax2:any;
  tempmax3:any;
  tempmax4:any;
  tempmax5:any;

  tempmin:any;
  tempmin1:any;
  tempmin2:any;
  tempmin3:any;
  tempmin4:any;
  tempmin5:any;

  temp:any;
  temp1:any;
  temp2:any;
  temp3:any;
  temp4:any;
  temp5:any;


  constructor(private _weatherService: WeatherService, private http:Http) {

  }


  ngOnInit() {
      // this.current= this.http.get("http://ip-api.com/json").subscribe(
      //   res =>{
      //   this.mylocation=res;
      //   this.local=JSON.parse(this.mylocation._body);
      //   console.log(res);
      //   console.log(this.local.city)
      //   console.log(this.local.countryCode)

      // })

      this.value = localStorage.getItem('location');

      if (this.value!=null){
          this.location=JSON.parse(this.value);
      }else {
        this.location={
          city:'rockville',
          code:'us'

        }
      }


    this._weatherService.getweather(this.location.city, this.location.code).subscribe(
      response => {
        console.log(response);
        this.weather=response;
        this.temp=Math.floor(response.list[0].main.temp * (9/5) - 459.67);
        this.temp1=Math.floor(response.list[9].main.temp * (9/5) - 459.67);
        this.temp2=Math.floor(response.list[13].main.temp * (9/5) - 459.67);
        this.temp3=Math.floor(response.list[20].main.temp * (9/5) - 459.67);
        this.temp4=Math.floor(response.list[28].main.temp * (9/5) - 459.67);
        this.temp5=Math.floor(response.list[36].main.temp * (9/5) - 459.67);


        this.tempmax=Math.floor(response.list[0].main.temp_max * (9/5) - 459.67);
        this.tempmax1=Math.floor(response.list[9].main.temp_max * (9/5) - 459.67);
        this.tempmax2=Math.floor(response.list[13].main.temp_max * (9/5) - 459.67);
        this.tempmax3=Math.floor(response.list[20].main.temp_max * (9/5) - 459.67);
        this.tempmax4=Math.floor(response.list[28].main.temp_max * (9/5) - 459.67);
        this.tempmax5=Math.floor(response.list[36].main.temp_max * (9/5) - 459.67);


        this.tempmin=Math.floor(response.list[0].main.temp_min * (9/5) - 470.67);
        this.tempmin1=Math.floor(response.list[9].main.temp_min * (9/5) - 470.67);
        this.tempmin2=Math.floor(response.list[13].main.temp_min * (9/5) - 470.67);
        this.tempmin3=Math.floor(response.list[20].main.temp_min * (9/5) - 470.67);
        this.tempmin4=Math.floor(response.list[28].main.temp_min * (9/5) - 470.67);
        this.tempmin5=Math.floor(response.list[36].main.temp_min * (9/5) - 470.67);
        console.log(this.tempmax);
      }
    );
    
  }
  


}
