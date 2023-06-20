import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  // Server Destination Address

  matchURL: string="http://localhost:3000/api/matches"

  constructor(private httpClient: HttpClient) { }

  getAllMatches(){
    return this.httpClient.get<{matches: any}>(this.matchURL);
  }
// y: Match ID (6, 9, 3....)
// Response One Object
  getMatchById(x){
  return this.httpClient.get<{ match: any }>(`${this.matchURL}/${x}`)
  }
// y: Match ID (6, 9, 3....)
// Response Boolean
  deleteMatch(y){
    return this.httpClient.delete(`${this.matchURL} / ${y}`)
  }

  //matchObj: {scoreOne:1 scoreTwo:2 ....}
  // Response: Boolean

  addMatch(matchObj){
    return this.httpClient.post(this.matchURL, matchObj)
  }

  // Response: Boolean
  // newMatch : object with new values
  editMatch(newMatch){
    return this.httpClient.put(this.matchURL, newMatch)
  }
// obj = {scoreOne: 3, scoreTwo:2}
  search(obj){
    return this.httpClient.post<{matchesFound : any}>(`${this.matchURL}/searchMatches`, obj)
  }

}
