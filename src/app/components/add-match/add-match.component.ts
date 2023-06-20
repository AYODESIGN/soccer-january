import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';



@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
// Form ID
matchForm: FormGroup;
match: any = {};

  constructor(private matchService: MatchService) { }

  ngOnInit() {
  }
  addMatch() {
    // console.log(this.match)
    // let idMatch = JSON.parse(localStorage.getItem("matchId") || '1');
    // let matches = JSON.parse(localStorage.getItem("matches") || '[]');
    // this.match.id = idMatch;
    // matches.push(this.match);
    // localStorage.setItem("matches",JSON.stringify(matches));
    // localStorage.setItem("matchId",JSON.stringify(idMatch + 1));
console.log("here match object",this.match)
this.matchService.addMatch(this.match).subscribe((response)=>{
  console.log("here response from BE", response)
})
  }

}
