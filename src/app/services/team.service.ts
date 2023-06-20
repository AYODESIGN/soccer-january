import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamURL: string="http//localhost:3000/api/teams"

  constructor(private httpClient: HttpClient) {}

getAllTeams(){
  return this.httpClient.get(this.teamURL);
}
// y: Match ID (6, 9, 3....)
// Response One Object
getTeamById(x){
return this.httpClient.get(`${this.teamURL} / ${x}`)
}
// y: Match ID (6, 9, 3....)
// Response Boolean
deleteTeam(y){
  return this.httpClient.delete(`${this.teamURL} / ${y}`)
}

//matchObj: {scoreOne:1 scoreTwo:2 ....}
// Response: Boolean

addTeam(teamObj){
  return this.httpClient.post(this.teamURL, teamObj)
}

// Response: Boolean
// newMatch : object with new values
editTeam(newTeam){
  return this.httpClient.put(this.teamURL, newTeam)
}

}

