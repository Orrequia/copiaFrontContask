import {Employee} from './employee.model';
import {Population} from '../../model/population.model';

export class Store {
  idStore: Number;
  name: string;
  address: string;
  email: string;
  phone: string;
  employees: Array<number>;
  dongles: Array<number>;
  idResponsible: number;
  idPopulation: number;
}