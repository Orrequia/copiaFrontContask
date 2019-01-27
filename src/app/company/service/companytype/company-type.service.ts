import { Injectable } from '@angular/core';
import {GenericService} from '../../../core/service/generic.service';

@Injectable()
export class CompanyTypeService extends GenericService {

  protected getResourceUrl() {
    return '/companyType';
  }
}
