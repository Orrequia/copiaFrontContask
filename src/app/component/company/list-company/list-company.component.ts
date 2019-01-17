import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CompanyService} from '../../../service/company/company.service';
import {Company} from '../../../model/company.model';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {SearchCompanyService} from '../../../service/company/search-company.service';

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

  constructor(private companyService: CompanyService,
              private searchCompanySercice: SearchCompanyService) {
    this.searchCompanySercice.search(this.textSearch$).subscribe(results => {
      this.companies = results;
    });
  }

  ngOnInit() {
    this.companyService.get().subscribe(companies => {
      this.companies = companies as unknown as Array<Company>;
    });
  }

  senderCompany(company: Company) {
    this.sendCompany.emit(company);
  }
}
