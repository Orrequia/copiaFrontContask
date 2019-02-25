import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppComponent} from '../../app.component';
import {UriParameters} from '../model/uri-parameters.model';

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

    private buildResourceUrl(uriParameters: UriParameters) {

      let url = AppComponent.API_URL;
      if (uriParameters) {
        url += this.getResourceUrl(uriParameters.variables);

        if (uriParameters.id) {
          url += '/' + uriParameters.id;
        }

        if (uriParameters.parameters) {
          url += '?';
          for (const clave of Object.keys(uriParameters.parameters)) {
            if (uriParameters.parameters[clave] !== null && uriParameters.parameters[clave] !== '') {
              url += clave + '=' + uriParameters.parameters[clave] + '&';
            }
          }
          url = url.substring(0, url.length - 1);
        }

      } else { url += this.getResourceUrl(); }

      console.log(url.substring(22));
      return url;
    }

    public post = (body: string, httpParameter?: UriParameters) => this.http.post(this.buildResourceUrl(httpParameter), body, this.options);

    public put = (body: string, httpParameter?: UriParameters) => this.http.put(this.buildResourceUrl(httpParameter), body, this.options);

    public delete = (httpParameter?: UriParameters) => this.http.delete(this.buildResourceUrl(httpParameter), this.options);

    public get = (httpParameter?: UriParameters) => this.http.get(this.buildResourceUrl(httpParameter), this.options);
}
