import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomsliderComponent } from './customslider.component';

describe('CustomsliderComponent', () => {
  let component: CustomsliderComponent;
  let fixture: ComponentFixture<CustomsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomsliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
