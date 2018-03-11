import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output()blueprintCreated= new EventEmitter<{serverName:string,serverContent:string}>();
  newServerName = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  onAddServer() {
    console.log(this.serverContentInput)
    this.serverCreated.emit({
    serverName:this.newServerName,
    serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
    serverName:this.newServerName,
    serverContent: this.serverContentInput.nativeElement.value});
  }

}
