import { ReadBookComponent } from './../../pages/read-book/read-book.component';
import { HomeHistoryComponent } from './home-history/home-history.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
       component: HomeMenuComponent
      },
      {
        path: 'two',
        component: HomeHistoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
