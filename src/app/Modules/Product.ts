export class Product {
  id:number;
  name:string;
  price:number;
  imgURL:string;
  quantity:number
  constructor(id:number, name:string, price:number, imgURL:string, quantity:number){
    this.id = id
    this.name = name;
    this.price = price
    this.imgURL = imgURL
    this.quantity = quantity
  }
}
