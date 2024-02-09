import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDropdownCustomComponent } from './ng-dropdown-custom.component';

describe('NgDropdownCustomComponent', () => {
  let component: NgDropdownCustomComponent;
  let fixture: ComponentFixture<NgDropdownCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDropdownCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgDropdownCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
