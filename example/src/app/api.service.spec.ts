import { TestBed } from '@angular/core/testing';

import { ApiCryptoService } from './api.service';

describe('ApiService', () => {
  let service: ApiCryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
