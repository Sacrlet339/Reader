import { HomeMenuComponent } from './home-menu/home-menu.component';
import { HomeHistoryComponent } from './home-history/home-history.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SynopsisComponent } from './home-menu/synopsis/synopsis.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, HomeHistoryComponent, HomeMenuComponent, SynopsisComponent]
})
export class HomePageModule {}
