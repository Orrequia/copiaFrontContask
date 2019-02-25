import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {Company} from '../../model/company.model';
import {debounceTime, map, tap} from 'rxjs/operators';
import {CompanyDataSource} from '../../datasource/company.data-source';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {

  @Output() sendCompany = new EventEmitter<Company>();
  @ViewChild('search') textSearch: ElementRef;
  private companies$: Observable<Array<Company>>;

  constructor(private companyDataSource: CompanyDataSource) {}

  ngOnInit() {
    this.companies$ = this.companyDataSource.getCompanies();
    this.subscriptionToSearch();
  }

  // Evento emitido para cada vez que pinchamos una empresa
  senderCompany(company: Company) {
    this.sendCompany.emit(company);
  }

  // Subscripción al evento de busqueda.
  subscriptionToSearch() {
    fromEvent(this.textSearch.nativeElement, 'keyup').pipe(
      map((e: any) => e.target.value),
      debounceTime(500),
      tap(query => {
        this.companies$ = this.companyDataSource.searchCompanies(query);
      }
    )).subscribe();
  }
}
