import { Injectable } from '@angular/core';
import {GenericService} from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyTypeService extends GenericService {

  protected getResourceUrl() {
    return '/companyType';
  }
}
