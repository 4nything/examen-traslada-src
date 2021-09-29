import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/materia.module';
import { dataReducer } from './shared/states/reducers/data.reducer';
import { DataEffect } from './shared/states/effects/data.effects';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './shared/shared.module';
import { NoticiasListComponent } from './views/noticias-list/noticias-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot({ data: dataReducer }, {runtimeChecks: {strictActionImmutability: false, strictStateImmutability: false}}),
    EffectsModule.forRoot([DataEffect]),
    HttpClientModule,
    FlexLayoutModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
