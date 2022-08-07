import { Component, OnInit } from '@angular/core';
import {VideoGameService} from "../video-game.service";
import {GameObject} from "../gameObject";

@Component({
  selector: 'app-video-game',
  templateUrl: './video-game.component.html',
  styleUrls: ['./video-game.component.css']
})
export class VideoGameComponent implements OnInit {

  gameList: Array<GameObject> = [];
  srcGameList: Array<GameObject> = [];
  isLoaded: boolean = false;
  p: number = 1;
  constructor(private videoGameService:VideoGameService) { }

  ngOnInit(): void {
    this.getGameList();
  }

  getGameList() {
    this.videoGameService.getGameList().subscribe(
        data=>
        {
            this.gameList=data.map((e) => {
              let date = new Date(e.first_release_date);
              e.first_release_date = (date.getMonth() + 1) + date.getDate() + '/' + '/' + date.getFullYear();
              e.rating = Math.round(e.rating);
              return e;
            });

            this.srcGameList = this.gameList;
            this.isLoaded = true;
        },
        error1 =>
        {
            console.log('Error');
        }
    )
  }

  onGameListFilter(eventData: {name: string, rating: number, orderBy: string, orderMethod: string}) {
    this.gameList = this.srcGameList.filter((gameDetail) => {
      if (eventData.name != '' && !gameDetail.name.includes(eventData.name)) return false;
      if(eventData.rating != NaN && Math.round(gameDetail.rating) < eventData.rating) return false;
      return gameDetail;
    });
    if(eventData.orderBy != '') {
      this.gameList.sort((a: GameObject, b: GameObject) => {
        if (eventData.orderMethod == 'desc') {
          return a[eventData.orderBy as keyof GameObject] > b[eventData.orderBy as keyof GameObject] ? 1 : -1;
        } else {
          return a[eventData.orderBy as keyof GameObject] < b[eventData.orderBy as keyof GameObject] ? 1 : -1;
        }
        return 0;
      });
    }
  }
}
