import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Company} from '../../model/company.model';
import {CompanyService} from './company.service';

@Injectable()
export class SearchCompanyService {

  constructor(private companyService: CompanyService) { }

  search(terms: Observable<string>): Observable<Array<Company>> {
    return terms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(source => this.searchEntries(source)));
  }

  searchEntries(term): Observable<Array<Company>> {
    return this.companyService.get(undefined, undefined, { freeSearch: term}) as unknown as Observable<Array<Company>>;
  }
}
