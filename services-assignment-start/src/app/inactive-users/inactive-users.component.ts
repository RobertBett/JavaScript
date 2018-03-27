import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];
  counter;


  constructor(private userService:UserService, private counterService:CounterService ){}

  ngOnInit(){
    this.users = this.userService.inactiveUsers;
    this.counter = this.counterService.activeToInactiveCounter;
    console.log(this.counterService.activeToInactiveCounter)
  }

  onSetToActive(id: number) {
  this.userService.setToActive(id);
  }
}
