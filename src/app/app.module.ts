import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { MaininfoComponent } from './maininfo/maininfo.component';
import { CardinfoComponent } from './cardinfo/cardinfo.component';
import { FooterComponent } from './footer/footer.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    MaininfoComponent,
    CardinfoComponent,
    FooterComponent,
    AboutPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
