import {Component, Input, OnInit} from '@angular/core';
import {Connected} from '../../model/connected.model';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  onLogout() {
    this.authService.logout();
  }

  toggleNavigation(body): void {
    body.toggleClass('mini-navbar');
    // smoothlyMenu();
  }
  logout() {
    localStorage.clear();
    // location.href='http://to_login_page';
  }
}
