import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title:string = "signup"
  //form Id
  signupForm: FormGroup;
  imagePreview: any;
  id: any
  user: any
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
      this.id = this.activatedRoute.snapshot.paramMap.get("id");
      if (this.id) {
        this.title = "Edit Profile";
        this.userService.connectedUser(this.id).subscribe((response) => {
          console.log(response.user);
          this.user = response.user;
          console.log(this.user.firstName);
    
          this.signupForm = this.formBuilder.group({
            firstName: [this.user.firstName, [Validators.required, Validators.minLength(3)]],
            lastName: [this.user.lastName, [Validators.required, Validators.minLength(3)]],
            email: [this.user.email, [Validators.required, Validators.email]],
            pwd: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
            img: [this.user.avatar]
          });
        });
      } else {
        this.signupForm = this.formBuilder.group({
          firstName: ["", [Validators.required, Validators.minLength(3)]],
          lastName: ["", [Validators.required, Validators.minLength(3)]],
          email: ["", [Validators.required, Validators.email]],
          pwd: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
          img: [""]
        });
      }
    }
    
  signup(){


    console.log("HERE OBJECT", this.signupForm.value);
    // let userId = JSON.parse(localStorage.getItem("userId") || "1")
    // let users = JSON.parse(localStorage.getItem("users") || "[]")
    // this.signupForm.value.id = userId;
    // this.signupForm.value.role = "user";
    // users.push(this.signupForm.value)
    // localStorage.setItem("users",JSON.stringify(users));
    // localStorage.setItem("userId",JSON.stringify(userId + 1));
    this.userService.signup(this.signupForm.value , this.signupForm.value.img).subscribe();
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
}
