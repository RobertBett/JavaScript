import { 
  Directive, 
  OnInit, 
  Renderer2, 
  ElementRef, 
  HostListener, 
  HostBinding,
  Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'blue';
  //this can bind styles to elements and it ca bind to any property
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue', false, false);
    this.backgroundColor= this.defaultColor;
  }

  //can be triggered wheever some event occurs and the event 
  //is specified as an argument and string 
  @HostListener('mouseenter')mouseover(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue', false, false);
    this.backgroundColor = this.highlightColor;

  }

  @HostListener('mouseleave')mouseleave(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent', false, false);
    this.backgroundColor = this.defaultColor;
    }

}
