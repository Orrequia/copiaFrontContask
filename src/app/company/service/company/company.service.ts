import { Injectable } from '@angular/core';
import {GenericService} from '../../../core/service/generic.service';

@Injectable()
export class CompanyService extends GenericService {

  protected getResourceUrl() {
    return '/company';
  }
}
