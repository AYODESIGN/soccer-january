import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
matchForm: FormGroup
match: any={};
id:any;
// foundMatch: any;
matches:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.matches = JSON.parse(localStorage.getItem("matches") || '[]');
    this.match = this.matches.find((elt) => {return elt.id == this.id});

  }
editMatch(){
for (let i = 0; i < this.matches.length; i++) {
  if (this.matches[i].id == this.id) {
   this.matches[i] = this.match
   break;
  }
}
localStorage.setItem("matches",JSON.stringify(this.matches));
this.router.navigate(["admin"]);
}

}
