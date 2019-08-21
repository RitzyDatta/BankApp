import { TestBed } from '@angular/core/testing';

import { BankServicesService } from './bank-services.service';

describe('BankServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankServicesService = TestBed.get(BankServicesService);
    expect(service).toBeTruthy();
  });
});
