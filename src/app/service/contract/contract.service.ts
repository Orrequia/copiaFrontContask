import { Injectable } from '@angular/core';
import {GenericService} from '../../core/service/generic.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService extends GenericService {

  protected getResourceUrl(ids?: Array<number>) {
    return '/company/' + ids[0] + '/contract';
  }
}
