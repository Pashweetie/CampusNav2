import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponentComponent } from './components/map-component/map-component.component';
import { NavBackgroundComponentComponent } from './components/nav-background-component/nav-background-component.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponentComponent,
    NavBackgroundComponentComponent,
    MenuComponentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
