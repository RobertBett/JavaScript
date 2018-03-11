import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input() element: { type: string, name:string, content:string};

  constructor() {
    console.log('constructor i am')
   }

  ngOnChanges(){

  }

  ngOnInit() {
    console.log('ngoninit i am')
  }

}
