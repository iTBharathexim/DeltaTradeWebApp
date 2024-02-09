import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RBIRefComponent } from './rbiref.component';

describe('RBIRefComponent', () => {
  let component: RBIRefComponent;
  let fixture: ComponentFixture<RBIRefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RBIRefComponent]
    });
    fixture = TestBed.createComponent(RBIRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
