import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { HeaderComponent } from './header/header.component';
import { FoodListComponent } from './food-list/food-list.component';
import { TopContentComponent } from './top-content/top-content.component';
import { FooterComponent } from './footer/footer.component';
import {LightgalleryModule} from "lightgallery/angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    FoodCardComponent,
    HeaderComponent,
    FoodListComponent,
    TopContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LightgalleryModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
