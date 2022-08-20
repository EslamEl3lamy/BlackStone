import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutSideDirective {

  @Output() clickOutside = new EventEmitter<any>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target']) onClickOutSide(target: any) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    const sidebarToggle = document.getElementById('sidebarToggle');

    if (!sidebarToggle?.contains(target)) this.clickOutside.emit(!clickedInside);
  }
}
