import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';
import {GenericService} from '../generic.service';

@Injectable()
export class CompanyService extends GenericService {

  protected getResourceUrl() {
    return '/company';
  }
}
