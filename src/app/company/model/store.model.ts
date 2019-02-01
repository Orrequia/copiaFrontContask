import {Employee} from './employee.model';
import {Population} from '../../province/model/population.model';

export class Store {
  idStore: number;
  name: string;
  address: string;
  email: string;
  phone: string;
  employees: Array<number>;
  dongles: Array<number>;
  idResponsible: number;
  idPopulation: number;
}
