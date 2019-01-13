import { Component, OnInit } from '@angular/core';
import {Company} from '../../model/company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companySelected: Company;

  constructor() { }

  ngOnInit() {
  }

  receiveCompany(e) {
    this.companySelected = e;
  }
}
