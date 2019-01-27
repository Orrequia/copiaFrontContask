import { Injectable } from '@angular/core';
import {GenericService} from '../../../core/generic/generic.service';

@Injectable()
export class CompanyTypeService extends GenericService {

  protected getResourceUrl() {
    return '/companyType';
  }
}
