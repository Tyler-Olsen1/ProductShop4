import { Component, OnInit } from '@angular/core';


import { Product } from '../product'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{


  model = new Product('string', 120, "string", "select")

  submitted = false

  onsubmit() {
    this.submitted = true
    alert('SUCCESS!! ' + JSON.stringify(this.model));
}

  constructor() { }

  ngOnInit() {
  }

}
