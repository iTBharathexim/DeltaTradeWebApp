import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFooterTooltipsComponent } from './custom-footer-tooltips.component';

describe('CustomFooterTooltipsComponent', () => {
  let component: CustomFooterTooltipsComponent;
  let fixture: ComponentFixture<CustomFooterTooltipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomFooterTooltipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFooterTooltipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
