import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-occurrence',
  templateUrl: './occurrence.component.html',
  styleUrls: ['./occurrence.component.css']
})
export class OccurrenceComponent implements OnInit {

  letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  occForm: FormGroup;
 constructor(private formBuilder: FormBuilder,
  private router:Router) { }

  ngOnInit() {
    this.occForm = this.formBuilder.group(
     {
       occurrence: ["",[Validators.required]],
     })
     }

 
//  let word = this.occForm.value.occurrence
//  let letterFound = 0
//  for (let i = 0; i < word.length; i++) {
//   for (let j = 0; j < this.letters.length; j++) {    
//     if (word[i] == this.letters[j]) {
//       letterFound ++
      
//     }
//   }
//  }

//     console.log(letterFound)
    
//   }
occurrence() {
let letterCount = {};
let word = this.occForm.value.occurrence
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }

 console.log(letterCount);
 
  return letterCount;
  
}
 

}
