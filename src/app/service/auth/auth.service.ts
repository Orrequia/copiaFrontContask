import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../../app.component';
import { Connected } from '../../model/connected.model';
import { map } from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class AuthService {

    private loggedIn = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient) { }

    get isLoggedIn() {
      if (localStorage.getItem('currentUser')) {
        this.loggedIn.next(true);
      }
      return this.loggedIn.asObservable();
    }

    public login(username: string, password: string) {

        const base64Credential: string = btoa(username + ':' + password);

        const headers = new HttpHeaders({
            'Authorization': 'Basic ' + base64Credential,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        const options = { headers: headers,
                          withCredentials: true};

        return this.http.post<Connected>(AppComponent.API_URL + '/login', {}, options)
            .pipe(
                map(user => {
                    if (user && user.idSession) {
                        localStorage.setItem('currentUser', JSON.stringify(user));
                        this.loggedIn.next(true);
                    }
                    return user;
                })
            );
    }

    public logout() {
        return this.http.post(AppComponent.API_URL + '/logout', {})
            .pipe(
                map((response: Response) => {
                  localStorage.removeItem('currentUser');
                  this.loggedIn.next(false);
                })
            );
    }
}
