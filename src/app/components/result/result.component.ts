import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
@Input() matchInput: any;
  constructor() { }

  ngOnInit() {
  }

  scoreColor(scoreOne,scoreTwo){
if(scoreOne>scoreTwo){
  return  ['green','Win'];
}
else if(scoreOne<scoreTwo){
  return  ['orange','Loss'];
}
else{
  return ['blue','Draw'];
    }
  }

 
      }

