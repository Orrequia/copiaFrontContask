import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../../../model/company.model';

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.css']
})
export class DetailCompanyComponent implements OnInit {

  @Input() company: Company;

  constructor() { }

  ngOnInit() {
  }

}
