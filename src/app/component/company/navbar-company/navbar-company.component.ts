import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../service/auth/auth.service';
import {Company} from '../../../model/company.model';

@Component({
  selector: 'app-navbar-company',
  templateUrl: './navbar-company.component.html',
  styleUrls: ['./navbar-company.component.css'],
  providers: []
})
export class NavbarCompanyComponent implements OnInit {

  @Input() company: Company;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
