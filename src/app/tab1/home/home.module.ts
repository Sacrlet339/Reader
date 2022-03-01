import { HomeMenuComponent } from './home-menu/home-menu.component';
import { HomeHistoryComponent } from './home-history/home-history.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { HomePageRoutingModule } from './home-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { HomePage } from './home.page';
import { SynopsisComponent } from './home-menu/synopsis/synopsis.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  declarations: [HomePage, HomeHistoryComponent, HomeMenuComponent, SynopsisComponent]
})
export class HomePageModule {}
