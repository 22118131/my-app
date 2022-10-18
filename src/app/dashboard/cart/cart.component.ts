import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public name: string ="";
  public price: number = 0;
  public quantity: number = 0;

  public carts:any = [
    {name:'aaa',price:10,quantity:10}
  ]

  constructor() { }

  ngOnInit(): void {
  }
 
  addToCart(){
    let cart={
      name: this.name,
      price: this.price,
      quantity: this.quantity
    }
    this.carts.push(cart);

    this.name="";
    this.price= 0;
    this.quantity=  0;

    alert("Successfully Added in to Cart")
  }
  delete(i:number){
    this.carts.splice(i,1)
  }

}
