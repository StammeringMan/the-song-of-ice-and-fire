import { TestBed, inject } from '@angular/core/testing';

import { HouseHttpService } from './house-http.service';

describe('HouseHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HouseHttpService]
    });
  });

  it('should be created', inject([HouseHttpService], (service: HouseHttpService) => {
    expect(service).toBeTruthy();
  }));
});
