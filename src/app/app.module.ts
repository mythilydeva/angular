import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS, AuthConfig, AuthHttp } from 'angular2-jwt';

@NgModule({
  providers: [AUTH_PROVIDERS],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
