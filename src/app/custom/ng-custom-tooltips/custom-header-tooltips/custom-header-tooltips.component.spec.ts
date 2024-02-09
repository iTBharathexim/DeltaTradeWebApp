import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHeaderTooltipsComponent } from './custom-header-tooltips.component';

describe('CustomHeaderTooltipsComponent', () => {
  let component: CustomHeaderTooltipsComponent;
  let fixture: ComponentFixture<CustomHeaderTooltipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomHeaderTooltipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomHeaderTooltipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
