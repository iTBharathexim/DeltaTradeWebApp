import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageControllerComponent } from './page-controller.component';

describe('PageControllerComponent', () => {
  let component: PageControllerComponent;
  let fixture: ComponentFixture<PageControllerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageControllerComponent]
    });
    fixture = TestBed.createComponent(PageControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
