import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  @Output() filterList = new EventEmitter<{name: string, rating: number, orderBy: string, orderMethod: string}>();

  gameName: string;
  gameOrderBy: string;
  gameRating: string;
  gameOrderDesc: string = "desc";
  constructor() { }

  ngOnInit(): void {
  }

  onClickClear() {
    this.gameName = '';
    this.gameOrderBy = '';
    this.gameRating = '';
    this.gameOrderDesc = 'desc';
    this.onClickFilter();
  }

  onClickOrderBy() {
    if (this.gameOrderDesc == "desc") this.gameOrderDesc = "asc";
    else this.gameOrderDesc = "desc";
    this.onClickFilter();
  }

  onClickFilter() {
    this.filterList.emit({name: this.gameName, rating: Number(this.gameRating), orderBy: this.gameOrderBy, orderMethod: this.gameOrderDesc});
  }
}
