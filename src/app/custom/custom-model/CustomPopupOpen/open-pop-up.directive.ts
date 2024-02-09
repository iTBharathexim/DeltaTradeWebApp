import {
  Directive,
  Renderer2,
  ElementRef,
  HostListener,
} from '@angular/core';
declare var $ :any;;

@Directive({
  selector: '[CommonDirective]'
})
export class OpenPopUpDirective {
  constructor(private elementRef: ElementRef,
    private renderer: Renderer2) {
    console.log(elementRef, 'dfsdfsdfdsfdfsdf')
  }

  @HostListener('window:mouseenter', ['$event']) mouseover(event: any) {
    var CUSTOM_HOVER_PANEL_MOUSE_ENTER_ID: any = $(event.target).attr('hover-popup-open-close');
    var NgCustomTooltipsDirectiveMouseEnter_ID: any = $(event.target).attr('tooltips-close');
    // console.log(event, 'sdfsdhjdhdgfdgdfg')
    if (CUSTOM_HOVER_PANEL_MOUSE_ENTER_ID == 'open') {
      this.CUSTOM_HOVER_PANEL_MOUSE_ENTER(event);
    }
    // if (NgCustomTooltipsDirectiveMouseEnter_ID == 'open') {
    //   this.NgCustomTooltipsDirectiveMouseEnter(event)
    // }
  }

  @HostListener('window:mouseleave', ['$event']) mouseleave(event: Event) {
    // this.CUSTOM_HOVER_PANEL_MOUSE_LEAVE(event);
    // this.NgCustomTooltipsDirectiveMouseLeave(event);
  }
  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event:any): void {

  }
  @HostListener('document:click', ['$event'])
  onClick(event:any): void {
    let panel_id: any = $(event.target).attr('popup-close');
    let hoverpopupopenclose: any = $(event.target).attr('hover-popup-open-close');
    let ngtooltipspopup: any = $(event.target).attr('ng-tooltips-popup');
    if (panel_id == $(this.elementRef.nativeElement).attr('id')) {
      this.CUSTOM_MODEL_POPEN_CLOSE(event);
    } else if (hoverpopupopenclose == 'open') {
      this.CUSTOM_HOVER_PANEL_CLICK(event);
      this.NgCustomTooltipsDirectiveMouseClick(event);
    } else if (ngtooltipspopup == $(this.elementRef.nativeElement).attr('id')) {
      this.CUSTOM_TOOLTIPS_CLICK(event);
    }
    
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.renderer.removeClass(this.elementRef.nativeElement,'custom-dropdown-active');
    }
  }

  CUSTOM_MODEL_POPEN_CLOSE(event: any) {
    var panel_id: any = $(event.target).attr('popup-close');
    // this.registerDragElement('.dropdown-controller#' + panel_id +' .'+panel_id)
    var ClassList: any = []
    for (let index = 0; index < event?.target?.classList.length; index++) {
      ClassList.push(event?.target?.classList[index])
    }
    if (ClassList.length == 0) {
      ClassList = event.target.className.split(' ')
    }
    let children: any = Array.from($('.dropdown-controller#' + panel_id).find('*'));
    if (ClassList?.includes('PopupOpen') == true || ClassList?.includes('ng-option-label') == true) {
      if ($(this.elementRef.nativeElement).attr('id') === panel_id) {
        $('.dropdown-controller#' + panel_id).css('display', 'flex');
        setTimeout(() => {
          $(children[0]).css({ 'transform': 'translateY(0)', 'transition-duration': '.5s' });
        }, 100)
      }
    }
    if (['close-popup', 'btn btn-primary mt-3 PopupClose','PopupClose'].includes(event.target.className)) {
      if ($(this.elementRef.nativeElement).attr('id') === panel_id) {
        $(children[0]).css({ 'transform': 'translateY(-200%)', 'transition-duration': '.5s' });
        setTimeout(() => {
          $('.dropdown-controller#' + panel_id).css('display', 'none');
        }, 300)
      }
      if (ClassList?.includes('close-popup') == true || ClassList?.includes('PopupClose') == true) {
        if ($(this.elementRef.nativeElement).attr('id') === panel_id) {
          $(children[0]).css({ 'transform': 'translateY(-200%)', 'transition-duration': '.5s' });
          setTimeout(() => {
            $('.dropdown-controller#' + panel_id).css('display', 'none');
          }, 300)
        }
      }
    }
  }

  CUSTOM_TOOLTIPS_CLICK(event: any) {
    var panel_id: any = $(event.target).attr('ng-tooltips-popup');
    var ClassList: any = []
    for (let index = 0; index < event?.target?.classList.length; index++) {
      ClassList.push(event?.target?.classList[index])
    }
    if (ClassList.length == 0) {
      ClassList = event.target.className.split(' ')
    }
    if (ClassList?.includes('TOOLTIPS_OPEN_CLOSE') == true || ClassList?.includes('ng-option-label') == true) {
      if ($(this.elementRef.nativeElement).attr('id') === panel_id) {
        $('.ng-custom-tooltips#' + panel_id).css('display', 'flex');
      } else {
        $('.ng-custom-tooltips#' + panel_id).css('display', 'none');
      }
    }
    if (['CLOSE_CUSTOM_TOOLTIPS', 'btn btn-primary mt-3 CLOSE_CUSTOM_TOOLTIPS'].includes(event.target.className)) {
      $('.ng-custom-tooltips#' + panel_id).css('display', 'none');
    }
  }

  CUSTOM_HOVER_PANEL_MOUSE_ENTER(event: any) {
    console.log(this.elementRef)
    // let windowinfo: any = this.wininfo.getControllerProperties('');
    // let top: any = parseFloat(event.target.offsetHeight + event.target.offsetTop + 310) - parseFloat('150');
    // let left: any = parseFloat(event.target.offsetWidth) - parseInt('700');
    // var panel_id: any = $(event.target).attr('hover-popup-open-close');
    // if (panel_id == 'open') {
    //   $('#CUSTOM_HOVER_PANEL').css({ 'display': 'flex', 'transform': 'scale(0.3)' })
    // }
    // if ((windowinfo?.BODY_HEIGHT > parseFloat(event.target.offsetHeight + event.target.offsetTop + 510))) {
    //   $('#CUSTOM_HOVER_PANEL').css({ 'display': 'flex', 'top': top + 'px', 'left': left + 'px' })
    // } else {
    //   let top: any = parseFloat('310') - parseFloat(event.target.offsetTop + event.target.offsetHeight + 25);
    //   $('#CUSTOM_HOVER_PANEL').css({ 'display': 'flex', 'top': top + 'px', 'left': left + 'px' })
    // }
  }

  CUSTOM_HOVER_PANEL_CLICK(event: any) {
    var ClassList: any = []
    $('#CUSTOM_HOVER_PANEL').css({
      'transform': 'scale(1)',
      'top': '0px',
      'left': ' 0px'
    })
    for (let index = 0; index < event?.target?.classList.length; index++) {
      ClassList.push(event?.target?.classList[index])
    }
    if (ClassList.length == 0) {
      ClassList = event.target.className.split(' ')
    }
    this.getAllClassNameList().then((res: any) => {
      var panel_id: any = $(event.target).attr('hover-popup-open-close');
      if (panel_id != 'open' && !this.checkvalue(res, ClassList) || ClassList.includes('window-close')) {
        $('#CUSTOM_HOVER_PANEL').css({ 'display': 'none' })
      } else {
        if (panel_id == 'open') {
          $('#CUSTOM_HOVER_PANEL').css({ 'display': 'flex', 'transform': 'scale(1)' })
        }
      }
    })
  }

  CUSTOM_HOVER_PANEL_MOUSE_LEAVE(event: any) {
    var ClassList: any = []
    for (let index = 0; index < event?.target?.classList.length; index++) {
      ClassList.push(event?.target?.classList[index])
    }
    if (ClassList.length == 0) {
      ClassList = event.target.className.split(' ')
    }
    this.getAllClassNameList().then((res: any) => {
      var panel_id: any = $(event.target).attr('hover-popup-open-close');
      if (panel_id != 'open' && !this.checkvalue(res, ClassList)) {
        $('#CUSTOM_HOVER_PANEL').css({ 'display': 'none' })
      }
    })
  }
  NgCustomTooltipsDirectiveMouseEnter(event: any) {
    if (event != undefined) {
      var panel_id: any = $(event.target).attr('tooltips-close');
      var ClassList: any = []
      for (let index = 0; index < event?.target?.classList.length; index++) {
        ClassList.push(event?.target?.classList[index])
      }
      if (ClassList.length == 0) {
        ClassList = event.target.className.split(' ')
      }
      if (ClassList?.includes('Tooltips') == true || ClassList?.includes('ng-option-label') == true) {
        if ($(this.elementRef.nativeElement).attr('id') === panel_id) {
          this.elementRef.nativeElement.style.display = 'flex';
        }
      }
      var btnClassList: any = []
      for (let index = 0; index < event?.target?.classList.length; index++) {
        btnClassList.push(event?.target?.classList[index])
      }
      if (ClassList.length == 0) {
        btnClassList = event.target.className.split(' ')
      }
      if (btnClassList.includes('close-tooltips') || btnClassList.includes('Tooltips-Close')) {
        if ($(this.elementRef.nativeElement).attr('id') === panel_id) {
          this.elementRef.nativeElement.style.display = 'none';
        }
      }
    }
  }
  NgCustomTooltipsDirectiveMouseLeave(event: any) {
    if (event != undefined) {
      var panel_id: any = $(event.target).attr('tooltips-close');
      var ClassList: any = []
      for (let index = 0; index < event?.target?.classList.length; index++) {
        ClassList.push(event?.target?.classList[index])
      }
      if (ClassList.length == 0) {
        ClassList = event.target.className.split(' ')
      }
      if (ClassList?.includes('Tooltips') == true || ClassList?.includes('ng-option-label') == true) {
        if ($(this.elementRef.nativeElement).attr('id') === panel_id) {
          this.elementRef.nativeElement.style.display = 'flex';
        }
      }
      var btnClassList: any = []
      for (let index = 0; index < event?.target?.classList.length; index++) {
        btnClassList.push(event?.target?.classList[index])
      }
      if (ClassList.length == 0) {
        btnClassList = event.target.className.split(' ')
      }
      if (btnClassList.includes('close-tooltips') || btnClassList.includes('Tooltips-Close')) {
        if ($(this.elementRef.nativeElement).attr('id') === panel_id) {
          this.elementRef.nativeElement.style.display = 'none';
        }
      }
    }
  }
  NgCustomTooltipsDirectiveMouseClick(event: any) {
    if (event != undefined) {
      var panel_id: any = $(event.target).attr('tooltips-close');
      var ClassList: any = []
      for (let index = 0; index < event?.target?.classList.length; index++) {
        ClassList.push(event?.target?.classList[index])
      }
      if (ClassList.length == 0) {
        ClassList = event.target.className.split(' ')
      }
      if (ClassList?.includes('Tooltips') == true || ClassList?.includes('ng-option-label') == true) {
        if ($(this.elementRef.nativeElement).attr('id') === panel_id) {
          this.elementRef.nativeElement.style.display = 'flex';
        }
      }
      var btnClassList: any = []
      for (let index = 0; index < event?.target?.classList.length; index++) {
        btnClassList.push(event?.target?.classList[index])
      }
      if (ClassList.length == 0) {
        btnClassList = event.target.className.split(' ')
      }
      if (btnClassList.includes('close-tooltips') || btnClassList.includes('Tooltips-Close')) {
        if ($(this.elementRef.nativeElement).attr('id') === panel_id) {
          this.elementRef.nativeElement.style.display = 'none';
        }
      }
      if ($(this.elementRef.nativeElement).attr('id') != panel_id) {
        this.elementRef.nativeElement.style.display = 'none';
      }
    }
  }
  getAllClassNameList() {
    return new Promise((resolve, reject) => {
      var temp: any = [];
      $(async function () {
        var doc: any = document.getElementById("CUSTOM_HOVER_PANEL") as any;
        doc = doc?.getElementsByTagName("*")
        await doc.forEach(async (element:any) => {
          await element?.classList?.forEach(async (classelement:any) => {
            await temp.push(classelement)
          });
        });
        await resolve(temp);
      });
    })
  }

  checkvalue(array1:any, array2:any) {
    let bool: boolean = false;
    array2.forEach((element2:any) => {
      if (array1.includes(element2)) {
        bool = true;
      }
    });
    return bool;
  }
  
  private registerDragElement(id:any) {
    const elmnt:any = document.querySelector(id);
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const dragMouseDown = (e:any) => {
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    };

    const elementDrag = (e:any) => {
      e = e || window.event;
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
      elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
    };

    const closeDragElement = () => {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    };

    if (document.getElementById(elmnt.id + 'header')) {
      /* if present, the header is where you move the DIV from:*/
      let temp:any=document.getElementById(elmnt.id + 'header');
      temp.onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
  }
  
  public allowDrop(ev:any): void {
    ev.preventDefault();
  }
  
  public drag(ev:any): void {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  public drop(ev:any): void {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
}
