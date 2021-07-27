import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitleDirective]'
})
export class TitleDirectiveDirective {

  constructor(private element:ElementRef,private render:Renderer2) { 
    render.setStyle(element.nativeElement,'color','red');
  }

}
