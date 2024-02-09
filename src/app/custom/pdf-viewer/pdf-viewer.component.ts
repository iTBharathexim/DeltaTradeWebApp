import {
  AfterViewInit, Component, ElementRef, Input, OnInit,
  SimpleChanges,
  ViewChild,
  forwardRef
} from '@angular/core';
declare var $ :any;
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => PdfViwerComponent)
  }]
})
export class PdfViwerComponent implements OnInit, AfterViewInit {

  title = 'angular-pdf-viewer-app';
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  @Input('src') src: any = '';
  @Input('width') width: any = '500px';
  @Input('height') height: any = '500px';
  @Input('Newheight') Newheight: any = '';
  @Input('name') name: any = 'PDF Viewer';
  @Input('downloadShow') downloadShow: boolean = true;
  @Input('base64_src') base64_src: any = '';
  @Input('htmlload') htmlload: boolean = false;

  renderText = true;
  originalSize = false;
  fitToPage = false;
  showAll = true;
  autoresize = false;
  showBorders = true;
  renderTextModes = [0, 1, 2];
  renderTextMode = 1;
  rotation = 0;
  zoom = 1;
  zoomScale = 'page-width';
  zoomScales = ['FitH', 'FitW'];
  pdfQuery = '';
  totalPages?: number;
  BASE_64_URL: any = '';
  loader: boolean = false;
  URL_IFRAME: any = '';
  @ViewChild('iframe') iframe?: ElementRef;
  Sppinloader: boolean = true;
  constructor(public sanitizer: DomSanitizer) {
  }
  SRC_UPDATE: any = '';
  ngOnInit() {
    this.SRC_UPDATE = this.src + '#toolbar=0&&embedded=true'
    this.URL_IFRAME = this.bypassAndSanitize(this.SRC_UPDATE);
    console.log(this.URL_IFRAME, 'sdsfdfsdfdsfsdfdsfdsfsdfdsfdfsd');
    this.Sppinloader = false
  }
  zoomIn(url: any) {
    this.zoom += 100;
    this.Sppinloader = true;
    this.cleanup();
    setTimeout(() => {
      this.URL_IFRAME = this.bypassAndSanitize(url + '&zoom=' + this.zoom);
      this.Sppinloader = false
    }, 300);
  }

  zoomOut(url:any) {
    if (this.zoom > 100)
      this.zoom -= 100;
    this.Sppinloader = true;
    this.cleanup();
    setTimeout(() => {
      this.URL_IFRAME = this.bypassAndSanitize(url + '&zoom=' + this.zoom);
      this.Sppinloader = false
    }, 300);
  }

  rotateDoc() {
    this.rotation += 90;
  }
  // Event handler when new PDF file is selected
  onFileSelected() {
    const $pdf: any = document.querySelector('#file');
    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.src = e.target.result;
      };
      reader.readAsArrayBuffer($pdf.files[0]);
    }
  }

  callBackFn(event:any) {
    console.log('callBackFn', event);
    this.totalPages = event._pdfInfo.numPages
  }
  pageRendered(event:any) {
    console.log('pageRendered', event);
    // setTimeout(()=> {this.loader=false},1500)
  }
  textLayerRendered(event:any) {
    console.log('textLayerRendered', event);
  }

  onError(event:any) {
    console.error('onError', event);
  }
  onProgress(event:any) {
    this.loader = true;
    console.log('onProgress', event);
  }

  downloadPdf(pdf:any) {
    var link = document.createElement('a');
    link.href = pdf;
    link.download = 'samplePDFFile.pdf';
    link.click();
    window.URL.revokeObjectURL(link.href);
  }
  printPdf(pdf:any) {
    const iframe: any = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = pdf;
    document.body.appendChild(iframe);
    iframe.contentWindow.print();
  }
  fitScreen(value: any) {
    console.log(value?.value)
    this.Sppinloader = true;
    this.cleanup();
    setTimeout(() => {
      this.URL_IFRAME = this.bypassAndSanitize(this.SRC_UPDATE + '&view=' + value?.value);
      this.Sppinloader = false
    }, 300);
  }
  Newsrc?: SafeResourceUrl;
  private _isLoading$ = new BehaviorSubject<boolean>(false);
  get isLoading$() {
    return this._isLoading$.asObservable();
  }
  cleanup() {
    this.URL_IFRAME = null;
  }

  bypassAndSanitize(url:any): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  ngAfterViewInit() {
    this.RecusrionHiddenIframeElements();
  }
  interval: any = ''
  RecusrionHiddenIframeElements() {
    if (this.htmlload == true) {
      $('#iframeId').css('display', 'none')
      this.Sppinloader = true;
      this.interval = setInterval(() => {
        if ($('#iframeId').contents().find('.main_nave').length != 0) {
          $('#iframeId').css('display', 'block')
          $('#iframeId').contents().find('.main_nave').css({ display: 'none' });
          $('#iframeId').contents().find('#sidebar').css({ display: 'none' });
          $('#iframeId').contents().find('.scroll-bar-main').addClass("width-full");
          $('#iframeId').contents().find('.scroll-bar-main').css('width', '100vw !important');
          clearInterval(this.interval);
          this.interval = '';
          this.Sppinloader = false;
        }
      }, 1000)
    }
  }

  onChange: (_: any) => void = (_: any) => { };
  onTouched: () => void = () => { };
  updateChanges() {
    this.SRC_UPDATE = this.src + '#toolbar=0&&embedded=true'
    this.URL_IFRAME = this.bypassAndSanitize(this.SRC_UPDATE);
    console.log(this.URL_IFRAME, 'sdsfdfsdfdsfsdfdsfdsfsdfdsfdfsd');
    this.onChange(()=>{
      this.SRC_UPDATE = this.src + '#toolbar=0&&embedded=true'
      this.URL_IFRAME = this.bypassAndSanitize(this.SRC_UPDATE);
      console.log(this.URL_IFRAME,'sdsfdfsdfdsfsdfdsfdsfsdfdsfdfsd');
    });
  }
  /**
   * Writes a new item to the element.
   * @param value the value
   */
  writeValue(value: any): void {
    //  console.log(value,'sdfsdfdsfsdf')
    //  this.value = value;
    this.updateChanges();
  }

  /**
   * Registers a callback function that should be called when the control's value changes in the UI.
   * @param fn
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Registers a callback function that should be called when the control receives a blur event.
   * @param fn
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
