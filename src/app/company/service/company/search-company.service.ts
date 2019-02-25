import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Company} from '../../model/company.model';
import {CompanyService} from './company.service';
import {UriParameters} from '../../../core/model/uri-parameters.model';

@Injectable()
export class SearchCompanyService {

  constructor(private companyService: CompanyService) { }

  // search(terms: Observable<string>): Observable<Array<Company>> {
  //   return terms.pipe(
  //     debounceTime(500),
  //     distinctUntilChanged(),
  //     switchMap(source => this.searchEntries(source)));
  // }

  searchEntries(uriParameters: UriParameters): Observable<Array<Company>> {
    return this.companyService.get(uriParameters) as unknown as Observable<Array<Company>>;
  }
}
