/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeServiceService } from 'src/app/tab1/services/home-service.service';
import { LibraryService } from 'src/app/tab1/services/library.service';
import { Router } from '@angular/router';
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
  constructor(public hs: HomeServiceService, public ls: LibraryService, public route: Router) { }

  ngOnInit() {}
  like(id){
    this.hs.likebook(id);
  }
  unlike(id){
    this.hs.unlikebook(id);
  }
  addToLibrary(id){
    console.log(id);
    this.ls.addToLibrary(this.history);
  }
  openBook(id){
    console.log(this.hs.openbook(id));
    this.route.navigate(['../tabs/pages/read-book']);

  }


}
