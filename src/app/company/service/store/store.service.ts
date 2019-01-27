import { Injectable } from '@angular/core';
import {GenericService} from '../../../core/generic/generic.service';

@Injectable()
export class StoreService extends GenericService {

  protected getResourceUrl(ids?: Array<number>) {
    return '/company/' + ids[0] + '/store';
  }
}
