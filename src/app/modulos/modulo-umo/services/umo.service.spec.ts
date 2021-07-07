import { TestBed } from '@angular/core/testing';

import { UmoService } from './umo.service';

describe('UmoService', () => {
  let service: UmoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UmoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
