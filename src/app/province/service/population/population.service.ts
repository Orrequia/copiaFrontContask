import { Injectable } from '@angular/core';
import {GenericService} from '../../../core/service/generic.service';

@Injectable()
export class PopulationService extends GenericService {

  protected getResourceUrl() {
    return '/population';
  }
}
