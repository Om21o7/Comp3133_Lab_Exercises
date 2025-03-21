import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'  // Use this directive as an attribute
})
export class InputFormatDirective {
  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() { 
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();  // Convert to uppercase
  }
}
