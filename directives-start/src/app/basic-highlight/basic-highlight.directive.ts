import { Directive, ElementRef, OnInit, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighDirective implements OnInit{
    backgroundColor: string;
    constructor(private elementRef:ElementRef, private renderer:Renderer2){
        elementRef.nativeElement
    }
    ngOnInit(){
    }

    @HostListener('mouseenter') mouseover(eventData:Event){
        this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'green')
    }

    @HostListener('mouseleave') mouseleave(eventData:Event){
        this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'blue')
    }
}