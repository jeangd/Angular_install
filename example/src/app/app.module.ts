import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ApiCryptoService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptoComponent } from './crypto/crypto.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ApiCryptoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
