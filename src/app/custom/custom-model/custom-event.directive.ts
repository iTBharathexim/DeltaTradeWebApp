import { Directive, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[customEvent]'
})
export class CustomEventDirective {

  constructor() { }

  @Output() customEvent: EventEmitter<void | MouseEvent | KeyboardEvent> = new EventEmitter<void | MouseEvent | KeyboardEvent>();
  
  @HostListener('mouseup', ['$event']) onMouseUp(event: MouseEvent): void {
    this.customEvent.emit(event);
  }
  @HostListener('click', ['$event']) onClick(event: MouseEvent): void {
    this.customEvent.emit(event);
  }
  @HostListener('keyup.enter', ['$event']) onEnter(event: KeyboardEvent): void {
    this.customEvent.emit(event);
  }

  @HostListener('keyup.space', ['$event']) onSpacebar(event: KeyboardEvent): void {
    this.customEvent.emit(event);
  }
}
