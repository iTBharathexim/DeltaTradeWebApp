import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCustomInputComponent } from './ng-custom-input.component';

describe('NgCustomInputComponent', () => {
  let component: NgCustomInputComponent;
  let fixture: ComponentFixture<NgCustomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCustomInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgCustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
