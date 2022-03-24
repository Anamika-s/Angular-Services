export class Product
{
  productId : number=0;
  productName: string="";
  price : number=0;
  constructor(productId: number, productName : string, price : number)
  {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
  }
}