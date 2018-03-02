import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  city: string;
  code: string;

  constructor(private router: Router) {


  }

  ngOnInit() {
  }

  saveForm(){

    let location = {
      city: this.city,
      state: this.code
    };

    localStorage.setItem('location', JSON.stringify(location));
    this.router.navigateByUrl('/home')
  }

}
