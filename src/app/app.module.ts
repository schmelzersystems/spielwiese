import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [],
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    AppComponent,
  ],
  exports: [
    MatButtonModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
