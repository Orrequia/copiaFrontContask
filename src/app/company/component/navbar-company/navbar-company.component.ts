import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {AuthService} from '../../../core/auth/service/auth.service';
import {Company} from '../../model/company.model';

@Component({
  selector: 'app-navbar-company',
  templateUrl: './navbar-company.component.html',
  styleUrls: ['./navbar-company.component.css'],
  providers: []
})
export class NavbarCompanyComponent implements OnInit, OnChanges {

  @Input() company: Company;

  private initSummaryContract: Boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.initSummaryContract = false;
  }

  ngOnChanges(): void {
    this.initSummaryContract = false;
  }

  logout() {
    this.authService.logout();
  }

  activeSummaryContract() {
    this.initSummaryContract = true;
  }
}
