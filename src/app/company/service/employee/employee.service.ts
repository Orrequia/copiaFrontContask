import { Injectable } from '@angular/core';
import {GenericService} from '../../../core/service/generic.service';

@Injectable()
export class EmployeeService extends GenericService {

  protected getResourceUrl() {
    return '/employee';
  }
}
