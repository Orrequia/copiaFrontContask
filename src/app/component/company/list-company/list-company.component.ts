import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CompanyService} from '../../../service/company/company.service';
import {Company} from '../../../model/company.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {

  @Output() sendCompany = new EventEmitter<Company>();

  private companies: Array<Company>;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.get().subscribe(companies => {
      this.companies = companies as unknown as Array<Company>;
    });
  }

  senderCompany(company: Company) {
    this.sendCompany.emit(company);
  }
}
