import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadBookComponent } from '../pages/read-book/read-book.component';
import { Tab1Page } from './tab1.page';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'tab1',
    component: Tab1Page,
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'read-book',
    component: ReadBookComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
