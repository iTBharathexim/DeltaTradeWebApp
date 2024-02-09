import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCustomCardModelComponent } from './ng-custom-card-model.component';

describe('NgCustomCardModelComponent', () => {
  let component: NgCustomCardModelComponent;
  let fixture: ComponentFixture<NgCustomCardModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCustomCardModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgCustomCardModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
