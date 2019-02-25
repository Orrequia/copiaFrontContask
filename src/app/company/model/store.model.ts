import {ContractInfoByDongle} from './contract-info-by-dongle.model';

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

  contractInfoByDongles: Array<ContractInfoByDongle>;
}
