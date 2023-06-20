import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: any = [{name: "Ronaldo", nbr:"7",position: 'ATK', img:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/03/31/13/Cristiano-Ronaldo.jpg' },{name: "Lionel Messi", nbr:"10",position: 'ATK', img:'https://img.asmedia.epimg.net/resizer/2RmkMiMA2ZDRQnL4HsZpRY9h5xU=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/PXCO5GFR25NILCCKUWNJEQZP4Y.jpg' }]
  constructor() { }

  ngOnInit() {
  }

}
