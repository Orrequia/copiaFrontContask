import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../../../model/company.model';
import {CompanyTypeService} from '../../../service/company-type/company-type.service';
import {CompanyType} from '../../../model/company-type';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.css']
})
export class DetailCompanyComponent implements OnInit {

  @Input() company: Company;
  companyType: CompanyType;

  constructor(private companyTypeService: CompanyTypeService) { }

  ngOnInit() {
    console.log(this.company);
    // this.companyType = this.companyTypeService.get(this.company.idCompanyType) as unknown as Observable<CompanyType>;

    this.companyTypeService.get(this.company.idCompanyType).subscribe(companyType => {
      this.companyType = companyType as unknown as CompanyType;
    });
  }

}
