import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/internal/operators';
import {AppState} from '../../core/reducer/core.reducer';
import {Store} from '@ngrx/store';
import {LoginAuth} from '../action/auth.action';
import {Credentials} from '../model/credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    errorMessage = '';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private store: Store<AppState>) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/company';
      //
      // // this.authService.logout();
      // this.authService.isLoggedIn.subscribe(value => {
      //   if (value) {
      //     this.router.navigate([this.returnUrl]);
      //   }
      // });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
        return;
    }

    const credentials = new Credentials();
    credentials.username = this.f.username.value;
    credentials.password = this.f.password.value;

    this.loading = true;
    this.store.dispatch(new LoginAuth(credentials));

      // this.authService.login(this.f.username.value, this.f.password.value)
      //     .pipe(first())
      //     .subscribe(
      //         data => {
      //             this.router.navigate([this.returnUrl]);
      //         },
      //         error => {
      //             this.errorMessage = error;
      //             this.loading = false;
      //         }
      //     );
  }
}
