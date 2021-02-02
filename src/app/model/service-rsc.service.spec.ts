import { TestBed } from '@angular/core/testing';

import { ServiceRscService } from './service-rsc.service';

describe('ServiceRscService', () => {
  let service: ServiceRscService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRscService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
