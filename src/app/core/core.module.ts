import {NgModule} from '@angular/core';;
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from '../auth/component/login.component';
import {SidebarComponent} from '../sidebar/component/sidebar.component';
import {AuthGuard} from '../auth/guard/auth.guard';
import {AuthService} from '../auth/service/auth.service';

@NgModule({})
export class CoreModule { }
