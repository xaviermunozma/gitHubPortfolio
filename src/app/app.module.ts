import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { PagesComponent } from './components/pages/pages.component';
import { SharedComponent } from './components/shared/shared.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ItemComponent } from './components/pages/item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    PagesComponent,
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
