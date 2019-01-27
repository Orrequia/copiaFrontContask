import { TestBed } from '@angular/core/testing';

import { SearchCompanyService } from './search-company.service';

describe('SearchCompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchCompanyService = TestBed.get(SearchCompanyService);
    expect(service).toBeTruthy();
  });
});
