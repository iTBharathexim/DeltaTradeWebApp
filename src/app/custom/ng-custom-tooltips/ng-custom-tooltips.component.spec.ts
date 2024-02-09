import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCustomTooltipsComponent } from './ng-custom-tooltips.component';

describe('NgCustomTooltipsComponent', () => {
  let component: NgCustomTooltipsComponent;
  let fixture: ComponentFixture<NgCustomTooltipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCustomTooltipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgCustomTooltipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
