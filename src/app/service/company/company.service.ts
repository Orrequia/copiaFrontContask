import { Injectable } from '@angular/core';
import {GenericService} from '../generic.service';

@Injectable()
export class CompanyService extends GenericService {

  protected getResourceUrl() {
    return '/company';
  }
}
