import { Injectable } from '@angular/core';
import {GenericService} from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService extends GenericService {

  protected getResourceUrl(ids?: Array<number>) {
    return '/company/' + ids[0] + '/store';
  }
}
