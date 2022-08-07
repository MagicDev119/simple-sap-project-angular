import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GameObject } from "./gameObject";

@Injectable({
  providedIn: 'root'
})
export class VideoGameService {

  constructor(private httpClient:HttpClient) { }

  getGameList()
  {
    return this.httpClient.get<GameObject[]>('https://public.connectnow.org.uk/applicant-test/');
  }
}
