import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GALLERY_SERVICE_GLOBAL_CONFIG } from './config/app.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {provide: GALLERY_SERVICE_GLOBAL_CONFIG, useValue: { path: './assets/gallery-data.json', maxItems: 3, multiple: false }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
