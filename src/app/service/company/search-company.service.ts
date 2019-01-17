import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Company} from '../../model/company.model';

@Injectable({
  providedIn: 'root'
})
export class SearchCompanyService {

  constructor() { }

  search(terms: Observable<string>): Observable<Array<Company>> {
    return terms.pipe(
      debounceTime(4000),
      distinctUntilChanged(),
      switchMap(source => this.searchEntries(source)));
  }

  searchEntries(term): Observable<Array<Company>> {
    console.log(term);
    return ;
  }
}
