import { Injectable } from '@angular/core';
import {GenericService} from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService extends GenericService {

protected getResourceUrl() {
    return '/province';
  }
}
