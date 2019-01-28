import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './reducer/core.reducer';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {metaReducers}),
    // StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'Esto es una prueba',
    }),
    EffectsModule.forRoot([])
  ]
})
export class CoreModule { }
