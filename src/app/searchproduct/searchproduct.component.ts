import { Component } from '@angular/core';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent {

  name = ""
  searchProduct = () => {
    let data:any = {
      "name":this.name
    }
    console.log(data);
    
  }
}
