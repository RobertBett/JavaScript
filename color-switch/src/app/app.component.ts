import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private pixels;
  private columns;
  private arr:any;
  private isColor = true;
  row={
    id:1
    
  }
  
  changeRed(){
    if(this.isColor=== true){
        this.isColor=false;
        this.onChange()

    }
  }


  changeGreen(){
    if(this.isColor=== false){
      this.isColor= true;
      this.onChange()

  }
  }
  
  onChange(){
    if(!isNaN(this.columns)){
      // this.arr= Array(this.columns).fill(this.columns);
      var x;
      var  i;
      var empty;
      var text= document.getElementsByTagName('ul');

      // if(!this.columns===undefined){
      //       for (x = 0; x<this.columns; x++){
      //           text[x].remove;
      //       }
      // // }
      
//looping through the the number and creating an element for each count
      document.getElementById('ul1').innerHTML=''
      for (i = 0; i < this.columns ; i++){
            var para = document.createElement("p");
            var element = document.getElementById("ul1");
            var node = document.createTextNode("please hire me i beg you");
            para.appendChild(node);
            element.appendChild(para);
            
            if(this.isColor==true){
              para.style.color="#4CAF50";
              para.style.backgroundColor = "#4CAF50";
            }else{
              para.style.color="#DE2D00";
              para.style.backgroundColor = "#DE2D00";
            }
            

            para.style.marginLeft ="20px";
            para.style.marginRight='-9px';
            para.style.display="inline-block"
            para.style.height=  this.pixels +'px';
            
      }
      // alert('you added '+ this.columns + 'new columns')      

    }else if(isNaN(this.columns)){
      alert('Please input a column number')

      
    }
  

  }



}