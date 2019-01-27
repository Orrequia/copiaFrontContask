import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {AuthService} from '../../auth/service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isLoggedIn$: Observable<Boolean>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }
}
