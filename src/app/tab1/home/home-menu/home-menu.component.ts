import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss'],
})
export class HomeMenuComponent implements OnInit {
  selectedHistoryItem = false;
  historyValue: any = {};
  queryHistory: any;//and array of previous queries
  constructor() { }

  ngOnInit() {}
  openBook(id){
    console.log('book Id', id);
  }
  myCallBackFunction2 = (): void => {
    //this is the call back function that will then stop displaying the query view page
    this.selectedHistoryItem = false;
  };
  getHistoryId(id){
    this.historyValue = this.queryHistory[id];
    this.selectedHistoryItem = true;
    console.log("historyValue ",this.historyValue);
  }
}
