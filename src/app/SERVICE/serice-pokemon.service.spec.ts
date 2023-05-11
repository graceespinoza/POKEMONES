import { TestBed } from '@angular/core/testing';

import { SericePokemonService } from './serice-pokemon.service';

describe('SericePokemonService', () => {
  let service: SericePokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SericePokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
