import { TestBed } from '@angular/core/testing';

import { TobarService } from './tobar.service';

describe('TobarService', () => {
  let service: TobarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TobarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
