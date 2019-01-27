import { Injectable } from '@angular/core';
import {GenericService} from '../../../core/generic/generic.service';

@Injectable()
export class EmployeeService extends GenericService {

  protected getResourceUrl() {
    return '/employee';
  }
}
