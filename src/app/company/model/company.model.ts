export class Company {
  idCompany: number;
  nif: string;
  name: string;
  note: string;
  idOwner: number;
  idCompanyType: number;
  stores: Array<number>;
  contracts: Array<number>;
}
