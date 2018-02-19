import { TestBed, inject } from '@angular/core/testing';

import { LojasService } from './lojas.service';

describe('LojasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LojasService]
    });
  });

  it('should be created', inject([LojasService], (service: LojasService) => {
    expect(service).toBeTruthy();
  }));
});
