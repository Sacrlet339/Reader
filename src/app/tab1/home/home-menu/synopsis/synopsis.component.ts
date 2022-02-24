/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, Input } from '@angular/core';
import { HomeServiceService } from 'src/app/tab1/services/home-service.service';
@Component({
  selector: 'app-synopsis',
  templateUrl: './synopsis.component.html',
  styleUrls: ['./synopsis.component.scss'],
})
export class SynopsisComponent implements OnInit {
  @Input() GoBack2: () => void;
  // @Input() like: (id) => void;
  @Input() history: any = {};
  genres = [];
  constructor(public hs: HomeServiceService) { }

  ngOnInit() {}
  like(id){
    console.log(id);
    this.hs.likebook(id);
  }
  unlike(id){
    console.log(id);
    this.hs.unlikebook(id);
  }

}
