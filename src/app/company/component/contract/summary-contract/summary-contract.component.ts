import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Company} from '../../../model/company.model';
import {ContractService} from '../../../../service/contract/contract.service';
import {Contract} from '../../../../model/contract.model';


@Component({
  selector: 'app-summary-contract',
  templateUrl: './summary-contract.component.html',
  styleUrls: ['./summary-contract.component.css']
})
export class SummaryContractComponent implements OnInit, OnChanges {

  @Input() company: Company;

  private contracts: Array<Contract>;

  constructor(private contractService: ContractService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    // if (this.company) {
    //   this.contractService.get(undefined, [this.company.idCompany]).subscribe(contracts => {
    //     this.contracts = contracts as unknown as Array<Contract>;
    //     console.log(this.contracts);
    //   });
    // }
  }

}
