import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.css']
})
export class AddPlayersComponent implements OnInit {

  playerForm: FormGroup;
  player: any = {};

  constructor() { }

  ngOnInit() {
  }
  addPlayer() {
    let idPlayer = JSON.parse(localStorage.getItem("playerId") || '1');
    let players = JSON.parse(localStorage.getItem("players") || '[]');
    this.player.id = idPlayer;
    players.push(this.player);
    localStorage.setItem("players",JSON.stringify(players));
    localStorage.setItem("playerId",JSON.stringify(idPlayer + 1));
  }

}

