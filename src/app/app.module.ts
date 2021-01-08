import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InfoboxComponent } from './infobox/infobox.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule , AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, InfoboxComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
