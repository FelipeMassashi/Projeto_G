import { TestBed } from '@angular/core/testing';

import { ServiceProjetoService } from '../container-projetos/service-projeto.service';

describe('ServiceProjetoService', () => {
  let service: ServiceProjetoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProjetoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
