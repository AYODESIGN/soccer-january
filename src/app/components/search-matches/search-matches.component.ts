import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-search-matches',
  templateUrl: './search-matches.component.html',
  styleUrls: ['./search-matches.component.css']
})
export class SearchMatchesComponent implements OnInit {

  // matches: any = JSON.parse(localStorage.getItem("matches") || "[]")
  matches: any 
  error: any
  
 //form Id
 searchForm: FormGroup;
 constructor(
  private formBuilder: FormBuilder,
  private router:Router,
  private matchService: MatchService
  ) { }

 ngOnInit() {
this.searchForm = this.formBuilder.group(
 {
   scoreOne: ["",[Validators.required]],
   scoreTwo: ["",[Validators.required]],
 })
 
 }

 search(){
  this.matches = []
  this.error = ""
  console.log(this.searchForm.value)
  this.matchService.search(this.searchForm.value).subscribe((response)=>{
console.log(response.matchesFound)
if(response.matchesFound.length !== 0){
  this.matches = response.matchesFound
} else{
   this.error= "there are no matches found"
}

  });
  // console.log(this.matches[0].scoreOne)
  //  this.foundMatches = [];
  
  //   for (let i = 0; i < this.matches.length; i++) {
      
  //   if(this.matches[i].scoreOne == this.searchForm.value.score || this.matches[i].scoreTwo == this.searchForm.value.score){
    
  //     this.foundMatches.push(this.matches[i])
  //   }
}
// console.log(this.foundMatches)

// localStorage.setItem("foundMatches",JSON.stringify(this.foundMatches));
// this.foundMatches = JSON.parse(localStorage.getItem("foundMatches") || "[]")
// // this.router.navigate(["search"]);


 
}