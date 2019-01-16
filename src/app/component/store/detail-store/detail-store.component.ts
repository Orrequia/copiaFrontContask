import {Component, Input, OnChanges, OnInit} from '@angular/core';

import { Store } from '../../../model/store.model';

@Component({
  selector: 'app-detail-store',
  templateUrl: './detail-store.component.html',
  styleUrls: ['./detail-store.component.css']
})
export class DetailStoreComponent implements OnInit, OnChanges {

  @Input()
  private store: Store;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

  }
}
