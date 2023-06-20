import { Component, OnInit } from "@angular/core";
import { MatchService } from "src/app/services/match.service";

@Component({
  selector: "app-match-info",
  templateUrl: "./match-info.component.html",
  styleUrls: ["./match-info.component.css"],
})
export class MatchInfoComponent implements OnInit {
  foundMatch: any;
  constructor(private matchService: MatchService) {}

  ngOnInit() {
    // let matches = JSON.parse(localStorage.getItem("matches") || '[]');
    // let id = localStorage.getItem("id");
    // for (let i = 0; i < matches.length; i++) {
    //   if (matches[i].id == id) {
    //     this.foundMatch = matches[i];
    //     break;
    let id = localStorage.getItem("id");
    this.matchService.getMatchById(id).subscribe((response) => {
      console.log("here into response from BE", response.match);
      this.foundMatch = response.match;
    });
  }
}
