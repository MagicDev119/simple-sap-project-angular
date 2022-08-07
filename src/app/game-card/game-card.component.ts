import { Component, OnInit, Input } from '@angular/core';
import {GameObject} from "../gameObject";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  @Input() gameDetail: GameObject;

  constructor() { }

  ngOnInit(): void {
  }

}
