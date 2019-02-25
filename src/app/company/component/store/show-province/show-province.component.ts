import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Province} from '../../../../province/model/province.model';
import {Population} from '../../../../province/model/population.model';
import {Observable} from 'rxjs';
import {ProvinceDataSource} from '../../../../province/datasource/province.data-source';

@Component({
  selector: 'app-show-province',
  templateUrl: './show-province.component.html',
  styleUrls: ['./show-province.component.css']
})
export class ShowProvinceComponent implements OnChanges {

  @Input() population: Population;

  private province$: Observable<Province>;

  constructor(private provinceDataSource: ProvinceDataSource) { }

  ngOnChanges() {
    this.province$ = this.provinceDataSource.getProvince(this.population.idProvince);
  }
}
