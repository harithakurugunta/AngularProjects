import { TestBed } from '@angular/core/testing';

import { MyjobService } from './myjob.service';

describe('MyjobService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyjobService = TestBed.get(MyjobService);
    expect(service).toBeTruthy();
  });
});
