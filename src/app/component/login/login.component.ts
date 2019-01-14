import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/internal/operators';

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
      private authService: AuthService) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/company';

      // this.authService.logout();
      this.authService.isLoggedIn.subscribe(value => {
        if (value) {
          this.router.navigate([this.returnUrl]);
        }
      });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
      this.authService.login(this.f.username.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  this.errorMessage = error;
                  this.loading = false;
              }
          );
  }
}
