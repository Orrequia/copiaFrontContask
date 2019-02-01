import { Injectable } from '@angular/core';
import {GenericService} from '../../../core/service/generic.service';

@Injectable()
export class ProvinceService extends GenericService {

protected getResourceUrl() {
    return '/province';
  }
}
