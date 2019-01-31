import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AppComponent } from '../../app.component';
import { Connected } from '../model/connected.model';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

    private loggedIn = new BehaviorSubject<boolean>(false);

    private headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    private options = { headers: this.headers,
    withCredentials: true};

    constructor(private http: HttpClient, private router: Router) { }

    // get isLoggedIn(): Observable<Boolean> {
    //
    //   if (localStorage.getItem('currentUser')) {
    //     this.isConnected();
    //   }
    //   return this.loggedIn.asObservable();
    // }

    public login(username: string, password: string) {

        const base64Credential: string = btoa(username + ':' + password);

        const headers = new HttpHeaders({
            'Authorization': 'Basic ' + base64Credential,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        const options = { headers: headers,
                          withCredentials: true};

        return this.http.post<Connected>(AppComponent.API_URL + '/auth/login', {}, options);
            // .pipe(
            //     map(user => {
            //         if (user) {
            //             localStorage.setItem('currentUser', JSON.stringify(user));
            //             this.loggedIn.next(true);
            //         }
            //         return user;
            //     })
            // );
    }

    public logout() {
      // localStorage.removeItem('currentUser');
      // this.loggedIn.next(false);
      // this.router.navigate(['/login']);
      return this.http.post(AppComponent.API_URL + '/auth/logout', {}, this.options);
    }

    public imConnected(): Observable<Boolean> {
      return this.http.get<Boolean>(AppComponent.API_URL + '/auth/connection', this.options);
    }
}
