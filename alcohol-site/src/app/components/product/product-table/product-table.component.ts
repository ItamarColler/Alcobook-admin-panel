import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  data: Product[];
  productView: string[] = [
    'Name',
    'Image',
    'CreatedAt'
  ];

  constructor(private productService: ProductService, private router: Router) {
    this.data=new Array<any>();
  }

  ngOnInit(): void {
    this.getProducts();
  }
  private getProducts() {
    var p : Product=null;
    this.productService.getProducts().subscribe(data=>{
     // console.log(data);
data.forEach((element:any)=>{
   p=new Product(element._id,element.title,element.image,element.body,element.ingredients,element.steps,element.createdAt,element.likes,element.comments,element.author);
  this.data.push(p);
});
//console.log(this.data);
    });
  }

  private onSelected(id:string){
    this.productService.currentProductId.next(id);
  }
}
