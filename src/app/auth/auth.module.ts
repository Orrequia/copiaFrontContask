import {NgModule} from '@angular/core';
import {LoginComponent} from './component/login.component';;
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './guard/auth.guard';
import {AuthService} from './service/auth.service';
import {StoreModule} from '@ngrx/store';
import {authReducer} from './reducer/auth.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffect} from './effect/auth.effect';

@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffect])
  ],
  providers: [
    AuthGuard,
    AuthService]
})
export class AuthModule {}
