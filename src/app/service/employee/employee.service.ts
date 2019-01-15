import { Injectable } from '@angular/core';
import {GenericService} from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends GenericService {

  protected getResourceUrl() {
    return '/employee';
  }
}
