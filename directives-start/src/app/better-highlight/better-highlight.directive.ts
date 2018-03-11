import { 
  Directive, 
  OnInit, 
  Renderer2, 
  ElementRef, 
  HostListener, 
  HostBinding} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  //this can bind styles to elements and it ca bind to any property
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue', false, false);
  }

  //can be triggered wheever some event occurs and the event 
  //is specified as an argument and string 
  @HostListener('mouseenter')mouseover(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue', false, false);
    this.backgroundColor = 'blue';

  }

  @HostListener('mouseleave')mouseleave(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent', false, false);
    this.backgroundColor = 'transparent';
    }

}
