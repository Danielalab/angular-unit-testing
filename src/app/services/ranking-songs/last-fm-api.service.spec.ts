import { TestBed } from '@angular/core/testing';

import { LastFmApiService } from './last-fm-api.service';

describe('LastFmApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LastFmApiService = TestBed.get(LastFmApiService);
    expect(service).toBeTruthy();
  });
});
