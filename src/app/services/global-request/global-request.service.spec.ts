import { TestBed } from '@angular/core/testing';

import { GlobalRequestService } from './global-request.service';

describe('GlobalRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalRequestService = TestBed.get(GlobalRequestService);
    expect(service).toBeTruthy();
  });
});
