import { Injectable } from '@angular/core';
import {UriParameters} from '../../../core/model/uri-parameters.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppComponent} from '../../../app.component';

@Injectable()
export class ContractInfoByDongleService {

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

  private getResourceUrl(ids?: Array<number>) {
    return '/company/' + ids[0] + '/store/' + ids[1] + '/contractInfoByDongle';
  }

  private buildResourceUrl(uriParameters: UriParameters) {

    let url = AppComponent.API_URL;

    if (uriParameters) { url += this.getResourceUrl(uriParameters.variables);
    } else { url += this.getResourceUrl(); }

    console.log(url.substring(22));
    return url;
  }

  public get = (httpParameter?: UriParameters) => this.http.get(this.buildResourceUrl(httpParameter), this.options);
}
