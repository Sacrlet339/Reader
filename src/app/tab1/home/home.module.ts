import { HomeMenuComponent } from './home-menu/home-menu.component';
import { HomeHistoryComponent } from './home-history/home-history.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SynopsisComponent } from './home-menu/synopsis/synopsis.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    MatIconModule
  ],
  declarations: [HomePage, HomeHistoryComponent, HomeMenuComponent, SynopsisComponent]
})
export class HomePageModule {}
