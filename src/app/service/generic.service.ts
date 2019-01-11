import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppComponent} from '../app.component';

@Injectable()
export abstract class GenericService {

    private readonly headers;
    private readonly options;

    constructor(public http: HttpClient) {

        this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        this.options = { headers: this.headers,
                          withCredentials: true};
    }

    protected abstract getResourceUrl();

    private buildResourceUrl(id?: number) {

        let url = AppComponent.API_URL + this.getResourceUrl();

        if (id) {
            url += '/' + id;
        }

        return url;
    }

    public post = (body: string) => this.http.post(this.buildResourceUrl(undefined), body, this.options);

    public put = (id: number, body: string) => this.http.put(this.buildResourceUrl(id), body, this.options);

    public delete = (id: number) => this.http.delete(this.buildResourceUrl(id), this.options);

    public get = (id?: number) => this.http.get(this.buildResourceUrl(id), this.options);
}
