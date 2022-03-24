import { ThrowStmt } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Product } from "./Product";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  products : Product[] = [];   
  product : any;
  // LoadProducts() : void{

  //     this.products =[
  //       new Product (100, "Mouse", 90000),
  //       new Product (100, "Mouse", 90000),
  //       new Product (100, "Mouse", 90000),
  //       new Product (100, "Mouse", 90000),
  //       new Product (100, "Mouse", 90000),
  //       new Product (100, "Mouse", 90000)
  //     ];
  // this.product = new  Product();
  // this.product.productId=10;
  // this.product.productName="aaa";
  // this.product.price=1111;
  // this.products.push(this.product);

    // this.product  = new Product(1,"A",1000);
    // this.products.push(this.product);
    LoadProducts() : void{
    this.products = [
     {productId:100, productName:"Mouse", price: 1200},
     
     {productId:101, productName:"Printer", price: 10000},
     
     {productId:102, productName:"Plotter", price: 1200},
     
     {productId:103, productName:"Scanner", price: 1200},
     
     {productId:104, productName:"Desktop", price: 1200}
    ];
  }
  GetProducts () : Product[]
  {
  this.LoadProducts();
  return this.products;
  }

  GetProductById(id:number) : Product{
     this.product = this.products.find(x=>x.productId==id);
     return this.product; 
  }
  InsertProduct (product : Product)
  {
      this.products.push(product);
  }

  constructor() { }
}
