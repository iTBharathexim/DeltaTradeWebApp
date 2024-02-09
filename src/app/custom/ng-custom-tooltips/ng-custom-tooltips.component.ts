import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'ng-custom-tooltips',
  templateUrl: './ng-custom-tooltips.component.html',
  styleUrls: ['./ng-custom-tooltips.component.scss']
})
export class NgCustomTooltipsComponent implements OnInit {
  @Input('name') name: any;
  @Input('width') width: any;
  @Input('height') height: any;
  @Input('maxwidth') maxwidth: any;
  @Input('maxheight') maxheight: any;
  @Input('minwidth') minwidth: any;
  @Input('minheight') minheight: any;
  @Input('customstyle') customstyle: any;
  @Input('modalbodyheight') modalbodyheight: any;
  @Input('modalbodystyle') modalbodystyle: any;
  @Input('FooterButton') FooterButton: boolean = false;
  @Input('EventButton') EventButton: boolean = false;
  @Input('FooterButtonText') FooterButtonText: any = 'Ok';
  @Input('id') id: any;
  @Output('ModelChange') ModelChange = new EventEmitter<any>();
  @Input('condition') condition: any = '';
  @Output('footerbutton') footerbutton = new EventEmitter<any>();
  @ViewChild('PopUpOpenClose')PopUpOpenClose?:ElementRef;

  footerbuttontext: any = [];
  constructor(public element: ElementRef) { }
  ngOnInit(): void {
    this.footerbuttontext[this.id] = this.condition;
  }

  get displayHidden() {
    return $('upload-modal')
  }
  ClosePopup() {
    this.ModelChange.emit('null');
  }
  OKBUTTON(PopUpOpenClose: any) {
    if (this.condition == true) {
      this.footerbutton.emit(this.condition);
      PopUpOpenClose.style.display = "none";
    } else {
      this.footerbutton.emit(false);
    }
  }

}
