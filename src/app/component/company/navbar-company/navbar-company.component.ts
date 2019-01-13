import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../service/auth/auth.service';

@Component({
  selector: 'app-navbar-company',
  templateUrl: './navbar-company.component.html',
  styleUrls: ['./navbar-company.component.css'],
  providers: []
})
export class NavbarCompanyComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
