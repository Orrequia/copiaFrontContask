import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {AuthService} from '../../auth/service/auth.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../core/reducer/core.reducer';
import {isLoggedIn} from '../../auth/selector/auth.selector';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isLoggedIn$: Observable<Boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isLoggedIn$ = this.store.select(isLoggedIn);
  }
}
