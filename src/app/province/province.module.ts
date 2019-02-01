import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {ProvinceService} from './service/province/province.service';
import {PopulationService} from './service/population/population.service';
import {provinceReducer} from './reducer/province.reducer';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ProvinceEffect} from './effect/province.effect';
import {populationReducer} from './reducer/population.reducer';
import {PopulationEffect} from './effect/population.effect';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('provinces', provinceReducer),
    StoreModule.forFeature('populations', populationReducer),
    EffectsModule.forFeature([ProvinceEffect, PopulationEffect])
  ],
  providers: [
    ProvinceService,
    PopulationService
  ]
})
export class ProvinceModule { }
