import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {SearchCompanyService} from '../../service/company/search-company.service';
import {Company} from '../../model/company.model';
import {CompanyService} from '../../service/company/company.service';
import {select, Store} from '@ngrx/store';

import * as fromCompanySelector from '../../selector/company.selector';
import * as fromCompanyState from '../../state/company.state';
import {LoadCompanies} from '../../action/company.action';
import {selectAllCompanyItems} from '../../selector/company.selector';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css'],
  providers: [SearchCompanyService]
})
export class ListCompanyComponent implements OnInit {

  @Output() sendCompany = new EventEmitter<Company>();
  searchCompany = new EventEmitter<Company>();
  private textSearch$ = new Subject<string>();

  private companies: Array<Company>;
  private companies$: Observable<Array<Company>>;

  constructor(private companyService: CompanyService,
              private searchCompanySercice: SearchCompanyService,
              private store$: Store<fromCompanyState.State>) {
    // this.searchCompanySercice.search(this.textSearch$).subscribe(results => {
    //   this.companies = results;
    // });

    // this.companies$ = store$.pipe(select(fromCompanySelector.selectAllCompanyItems));
    this.companies$ = store$.pipe(select(selectAllCompanyItems));
  }

  ngOnInit() {
    // this.companyService.get().subscribe(companies => {
    //   this.companies = companies as unknown as Array<Company>;
    // });
    this.store$.dispatch(new LoadCompanies());
  }

  senderCompany(company: Company) {
    this.sendCompany.emit(company);
  }
}
