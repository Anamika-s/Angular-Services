import { ThrowStmt } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
 
import { Product } from "../Product";
import { ProductService } from "../product.service";
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  
  products: Product[] =[];
  product : any;
  constructor(private _productServive : ProductService) { }

  ngOnInit(): void { 
    this.GetProducts();
    this.GetProductById(101);
    this.InsertProduct();
  }
   GetProducts()
   {
    this.products = this._productServive.GetProducts();
   }
   GetProductById(id: number)
   { 
     this.product =  this._productServive.GetProductById(id); 
   }

   InsertProduct()
   {
     this.product = { productId: 110, productName:"New2 ", price:2000 };
     this._productServive.InsertProduct(this.product);
   }
}
