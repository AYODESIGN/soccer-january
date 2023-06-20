import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
errorMsg : string;
  constructor(
    private formBuilder: FormBuilder ,
    private router:Router ,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        email: ["",[Validators.required,Validators.email]],
        pwd: ["",[Validators.required]],
      })
  }
  login(){
console.log(this.loginForm.value)
    this.userService.login(this.loginForm.value).subscribe((response) => {
      console.log(response.user)
      localStorage.setItem("connecterUserId", response.user.userId);
    });
  }
}
    // console.log("HERE OBJECT", this.loginForm.value);
    // let user = this.loginForm.value;
    // let users = JSON.parse(localStorage.getItem("users") || "[]")
    // let foundUser;

    // for (let i = 0; i < users.length; i++) {
    //   if (users[i].email == user.email && users[i].pwd == user.pwd) {
    //     localStorage.setItem("connecterUserId", users[i].id);
    //     foundUser = users[i];
    // break;
//   }
// }
//    if (foundUser) {
//     if(foundUser.role == "admin"){
// this.router.navigate(["admin"]);
//     }
//     else{
//       this.router.navigate([""]);

//     }
//    } else{
//     this.errorMsg = "Please Check Email/Password";
//    }
//  }
