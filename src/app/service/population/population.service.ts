import { Injectable } from '@angular/core';
import {GenericService} from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class PopulationService extends GenericService {

  protected getResourceUrl() {
    return '/population';
  }
}
