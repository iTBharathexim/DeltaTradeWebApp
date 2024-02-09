import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfViwerComponent } from './pdf-viewer.component';

describe('PdfViwerComponent', () => {
  let component: PdfViwerComponent;
  let fixture: ComponentFixture<PdfViwerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfViwerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfViwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
