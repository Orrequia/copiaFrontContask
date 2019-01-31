import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './reducer/core.reducer';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {environment} from '../../environments/environment';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument({name: 'Contask'}) : [],
    EffectsModule.forRoot([])
  ]
})
export class CoreModule { }
