import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  activeToInactiveCounter = 10;
  inactiveToActiveCounter = 0;


  constructor() { }

  incrementActiveToInactive(){
    this.activeToInactiveCounter ++;
    return this.activeToInactiveCounter
    }

  incrementInactiveToActive(){
    this.inactiveToActiveCounter ++;
    console.log(this.inactiveToActiveCounter);
    }
}
