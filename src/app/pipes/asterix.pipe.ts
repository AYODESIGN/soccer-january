import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "asterix",
})
export class AsterixPipe implements PipeTransform {
  // transform(value: any, ...args: any[]): any {
  //   return null;
  // }
 
  // transform(ch) {
  //   let result:string="";
  //   let vowel = ["a", "e", "i", "o", "u", "y"];
  //   for (let i = 0; i < v.length; i++) {
  //     for (let j = 0; j < ch.length; j++) {
   
     
  //       if (vowel[i] == ch[j]) {
  //         result= result +
          
  //       }
      
  //   }
  //   }
  // }
  //  transform() {
  //   let ch = "abderahman";
  //   let result = "";
  //   let vowel = ["a", "e", "i", "o", "u", "y"];
  
  //   for (let i = 0; i < ch.length; i++) {
  //     let isVowel = false; // Flag to track vowel status
  
  //     for (let j = 0; j < vowel.length; j++) {
  //       if (vowel[j] === ch[i]) {
  //         isVowel = true;
  //         break;
  //       }
  //     }
  
  //     if (isVowel) {
  //       result = result + "*";
  //     } else {
  //       result = result + ch[i];
  //     }
  //   }
  
  //   console.log(result);
  // }
  transform(ch) {
   
    let result = "";
    let vowel = ["a", "e", "i", "o", "u", "y"];
  
    for (let i = 0; i < ch.length; i++) {
      let x = ch[i];
      for (let j = 0; j < vowel.length; j++) {
        if (vowel[j] === ch[i].toLowerCase) {
          x='*';
          break;
        }
      }
        result = result + x;
    }
    console.log(result);
  return result ; 
    
  }
}
