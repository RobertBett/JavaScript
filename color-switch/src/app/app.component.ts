import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private columns:number;
  private arr:any;
  row={
    id:1
  }
  
  onChange(){
    if(!isNaN(this.columns)){
      // this.arr= Array(this.columns).fill(this.columns);
      var  i;
      for (i = 0; i < this.columns ; i++){
            var para = document.createElement("li");
            var node = document.createTextNode("is this working?");
            para.appendChild(node);
            var element = document.getElementById("ul1");
            element.appendChild(para);
            
      }alert('you added '+ this.columns + 'new columns')      

    }else if(isNaN(this.columns)){
      alert('this isnt a number')
    }

  }



}
