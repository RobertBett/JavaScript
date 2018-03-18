import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';
import{RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import {WeatherService} from './weather.service';


const appRoutes=[
  {
    path:'', component:HomeComponent
  },
  {
    path:'search', component:SearchComponent
  },
  {
    path:'home', component:HomeComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
