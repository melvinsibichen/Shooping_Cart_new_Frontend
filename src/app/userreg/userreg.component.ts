import { Component } from '@angular/core';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent {

  name = ""
  address = ""
  email = ""
  phoneNo = ""
  password = ""
  confirmPassword = ""

  readValues = () => {
    let data = {
      "name":this.name,
      "address":this.address,
      "email":this.email,
      "phoneNo":this.phoneNo,
      "password":this.password,
      "confirmPassword":this.confirmPassword
    }
    console.log(data);
    
  }

}