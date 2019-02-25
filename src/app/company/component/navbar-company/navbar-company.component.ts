import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Company} from '../../model/company.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../../core/reducer/core.reducer';
import {LogoutAuth} from '../../../auth/action/auth.action';

@Component({
  selector: 'app-navbar-company',
  templateUrl: './navbar-company.component.html',
  styleUrls: ['./navbar-company.component.css'],
  providers: []
})
export class NavbarCompanyComponent implements OnInit, OnChanges {

  @Input() company: Company;
  private initSummaryContract: Boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.initSummaryContract = false;
  }

  ngOnChanges(): void {
    this.initSummaryContract = false;
  }

  logout() {
    this.store.dispatch(new LogoutAuth());
  }

  // Activa el modal de resumen de contrato.
  activeSummaryContract() {
    this.initSummaryContract = true;
  }
}
