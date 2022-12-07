import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  constructor(private route:Router) {}

  email = ""
  password = ""

  readValues = () => {
    let data = {
      "email": this.email,
      "password": this.password
    }
    console.log(data);

    // if(this.username=="user" && this.password=="123"){
    //   this.route.navigate(['/view'])
    // } else {
    //   alert("Invalid user")
    // }
    
  }
}
