import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-teams',
  templateUrl: './add-teams.component.html',
  styleUrls: ['./add-teams.component.css']
})
export class AddTeamsComponent implements OnInit {

  TeamForm: FormGroup;
  team: any = {};

  constructor() { }

  ngOnInit() {
  }
  addTeam() {
    let idTeam = JSON.parse(localStorage.getItem("teamId") || '1');
    let teams = JSON.parse(localStorage.getItem("teams") || '[]');
    this.team.id = idTeam;
    teams.push(this.team);
    localStorage.setItem("teams",JSON.stringify(teams));
    localStorage.setItem("teamId",JSON.stringify(idTeam + 1));
  }

}