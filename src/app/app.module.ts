import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Satellite } from './satellite';

import { AppComponent } from './app.component';
import { OrbitListComponent } from './orbit-list/orbit-list.component';


@NgModule({
  declarations: [
    AppComponent,
    OrbitListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
