import { Component } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  name = ""
  image = ""
  category = ""
  price = ""
  description = ""

  readValues = () => {
    let data:any = {
      "name":this.name,
      "image":this.image,
      "category":this.category,
      "price":this.price,
      "description":this.description
    }
    console.log(data);
    
  }
}
