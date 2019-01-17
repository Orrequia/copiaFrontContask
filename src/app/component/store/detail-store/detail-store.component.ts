import {Component, Input, OnChanges, OnInit} from '@angular/core';

import { Store } from '../../../model/store.model';
import {PopulationService} from '../../../service/population/population.service';
import {Population} from '../../../model/population.model';
import {ProvinceService} from '../../../service/province/province.service';
import {Province} from '../../../model/province.model';
import {EmployeeService} from '../../../service/employee/employee.service';
import {Employee} from '../../../model/employee.model';

@Component({
  selector: 'app-detail-store',
  templateUrl: './detail-store.component.html',
  styleUrls: ['./detail-store.component.css']
})
export class DetailStoreComponent implements OnInit, OnChanges {

  @Input()
  private store: Store;

  private population: Population;
  private province: Province;
  private employees: Array<Employee>;

  constructor(private populationService: PopulationService,
              private provinceService: ProvinceService,
              private employeeService: EmployeeService) {
    this.population = new Population();
    this.province = new Province();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.store && this.store.idStore) {
      this.populationService.get(this.store.idPopulation).subscribe(population => {
        this.population = population as unknown as Population;

        this.provinceService.get(this.population.idProvince).subscribe(province => {
          this.province = province as unknown as Province;
        });
      });
      this.employeeService.get(undefined, undefined, {store: this.store.idStore}).subscribe(employees => {
        this.employees = employees as unknown as Array<Employee>;
      });
    }
  }
}
