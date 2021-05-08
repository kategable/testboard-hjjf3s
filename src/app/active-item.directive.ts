import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[app-board-item[active]'
})
export class ActiveItemDirective {
  constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow'; 
  }
}