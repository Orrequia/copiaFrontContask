import { TestBed } from '@angular/core/testing';

import { ContractInfoByDongleService } from './contract-info-by-dongle.service';

describe('ContractInfoByDongleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContractInfoByDongleService = TestBed.get(ContractInfoByDongleService);
    expect(service).toBeTruthy();
  });
});
