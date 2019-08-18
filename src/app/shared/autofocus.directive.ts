import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appAutoFocus]'
})
export class AutoFocusDirective {

    constructor(private elementRef: ElementRef) {
        setTimeout(() => this.elementRef.nativeElement.focus(), 0);
    }

}
