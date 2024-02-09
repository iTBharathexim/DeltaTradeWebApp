import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomContentTooltipsComponent } from './custom-content-tooltips.component';

describe('CustomContentTooltipsComponent', () => {
  let component: CustomContentTooltipsComponent;
  let fixture: ComponentFixture<CustomContentTooltipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomContentTooltipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomContentTooltipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
