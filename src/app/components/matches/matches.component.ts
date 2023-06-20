import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: any = [{scoreOne:2, scoreTwo:4,teamOne:'CA',teamTwo:'EST'},{scoreOne:2, scoreTwo:2 ,teamOne:'JUV',teamTwo:'ROM'},{scoreOne:2, scoreTwo:0,teamOne:'FCB',teamTwo:'RMD'}];
  constructor() { }

  ngOnInit() {
  }

}
