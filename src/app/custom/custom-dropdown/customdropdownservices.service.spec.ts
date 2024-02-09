import { TestBed } from '@angular/core/testing';

import { CustomdropdownservicesService } from './customdropdownservices.service';

describe('CustomdropdownservicesService', () => {
  let service: CustomdropdownservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomdropdownservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
