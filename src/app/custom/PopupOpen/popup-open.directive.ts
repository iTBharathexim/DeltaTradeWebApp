import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  Input,
  HostBinding
} from '@angular/core';
declare var $ :any;

@Directive({
  selector: '[Minimize_Maximize_PopUp]'
})
export class PopupOpenDirective {
  @HostBinding('style.backgroundColor') backgroundColor?: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
  }
  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event:any): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {

    }
  }
  @HostListener('document:click', ['$event'])
  onClick(event:any): void {
    var panel_id:any= $(event.target).attr('popup-close');
    if ($(this.elementRef.nativeElement).hasClass('maximum-size-modal') &&
        ['close full-screen','full-screen-img'].includes(event.target.className) && 
        $(this.elementRef.nativeElement).attr('id')===panel_id) {
        $(this.elementRef.nativeElement).removeClass('maximum-size-modal');
        return;
    }
    if (['close full-screen','full-screen-img'].includes(event.target.className) == true &&
         $(this.elementRef.nativeElement).attr('id')===panel_id) {
         $(this.elementRef.nativeElement).addClass('maximum-size-modal');
   }
  }
}
