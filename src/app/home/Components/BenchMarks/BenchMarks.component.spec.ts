import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchMarksComponent } from './BenchMarks.component';

describe('BenchMarksComponent', () => {
  let component: BenchMarksComponent;
  let fixture: ComponentFixture<BenchMarksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenchMarksComponent]
    });
    fixture = TestBed.createComponent(BenchMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
