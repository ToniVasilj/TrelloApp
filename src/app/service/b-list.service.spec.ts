import { TestBed } from '@angular/core/testing';

import { BListService } from './b-list.service';

describe('BListService', () => {
  let service: BListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
