import { Component, OnInit, Input } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'Custom-Slider',
  templateUrl: './customslider.component.html',
  styleUrls: ['./customslider.component.scss']
})
export class CustomsliderComponent implements OnInit {
  @Input('ITEM_SIZE') ITEM_SIZE: any = [];
  @Input('SliderClassName') SliderClassName: any = [];
  counter: number = 0;
  SlideObject: any = []
  SLIDER_NOT_FOUND: boolean = false;
  CLEAR_INTERVAL: any = null;

  ngOnInit(): void {
    this.CLEAR_INTERVAL = setInterval(() => {
      this.Sliderload();
    }, 1000);
    if (this.SlideObject.length != 0) {
      clearInterval(this.CLEAR_INTERVAL);
    }
    this.automaticsliderchanged();
  }

  Sliderload() {
    if (this.SlideObject.length != 0) {
      clearInterval(this.CLEAR_INTERVAL);
    }
    this.SlideObject = document.querySelectorAll('.' + this.SliderClassName);
    if (this.SlideObject.length != 0) {
      $('.dotted').removeClass('dotted-active');
      $('.' + this.SliderClassName).css({ 'display': 'none'});
      setTimeout(() => {
        $('#dotted'+this.counter).addClass('dotted-active');
        $(this.SlideObject[this.counter]).css({ 'display': 'block','transform': 'translateX(0%)'});
      }, 500)
    }
  }
  nextSlider() {
    if (this.SlideObject.length >= this.counter) {
      this.SLIDER_NOT_FOUND = false;
      this.counter++;
      this.Sliderload();
    } else {
      this.SLIDER_NOT_FOUND = true;
    }
  }
  backSlider() {
    if (this.counter != 0) {
      this.SLIDER_NOT_FOUND = false;
      this.counter--;
      this.Sliderload();
    } else {
      this.SLIDER_NOT_FOUND = true;
    }
  }
  changeSlider(index:any){
    this.counter=index;
    this.Sliderload();
  }
  
  automaticsliderchanged(){
    // if (this.counter<0) {
    //   this.nextSlider();
    // } else {
    //   this.backSlider();
    // }
    // setTimeout(()=>{
    //   this.automaticsliderchanged();
    // },2000)
  }
}
