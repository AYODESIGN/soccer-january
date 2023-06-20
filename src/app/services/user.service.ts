import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl: string = "http://localhost:3000/api/users";
  constructor(private http:HttpClient){}

  login(user){
    return this.http.post<{user:any}>(this.userUrl + "/login" , user)
  }

  signup(user:any , img : File){
    let formData = new FormData();
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("pwd", user.pwd);
    formData.append("img", img);
  return this.http.post(this.userUrl + "/signup" , formData)
  }

  
  connectedUser(userId){
    return this.http.get<{user:any }>(`${this.userUrl}/${userId}` )
  }



}
