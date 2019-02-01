import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppComponent} from '../../app.component';

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

    protected abstract getResourceUrl(ids?: Array<number>);

    private buildResourceUrl(id?: number, ids?: Array<number>, params?: {}) {

        let url = AppComponent.API_URL + this.getResourceUrl(ids);

        if (id) {
            url += '/' + id;
        }

        if (params) {
          url += '?';
          for (const clave of Object.keys(params)) {
            if (params[clave] !== null && params[clave] !== '') {
              url += clave + '=' + params[clave] + '&';
            }
          }
          url = url.substring(0, url.length - 1);
        }

        console.log(url.substring(22));
        return url;
    }

    public post = (body: string, ids?: Array<number>) => this.http.post(this.buildResourceUrl(undefined, ids), body, this.options);

    public put = (id: number, body: string, ids?: Array<number>) => this.http.put(this.buildResourceUrl(id, ids), body, this.options);

    public delete = (id: number, ids?: Array<number>) => this.http.delete(this.buildResourceUrl(id, ids), this.options);

    public get = (id?: number, ids?: Array<number>, params?: {}) => this.http.get(this.buildResourceUrl(id, ids, params), this.options);
}
