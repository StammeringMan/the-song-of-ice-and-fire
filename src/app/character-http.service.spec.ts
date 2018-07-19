import { TestBed, inject } from '@angular/core/testing';

import { CharacterHttpService } from './character-http.service';

describe('CharacterHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterHttpService]
    });
  });

  it('should be created', inject([CharacterHttpService], (service: CharacterHttpService) => {
    expect(service).toBeTruthy();
  }));
});
