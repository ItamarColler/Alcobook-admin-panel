import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  selectedProduct: Product;
  error = null;
  currentProductId = "";
  private errorSub = Subscription;

  constructor(private http: HttpClient, private productService: ProductService) {
    this.getCurrentProduct();
   }

  ngOnInit(): void {
    this.displayProduct();
  }

  displayProduct() {
    this.productService.getProduct().subscribe(data=>
      {
        //console.log(data);
        this.selectedProduct = new Product(
          data._id,
          data.title,
          data.image,
          data.body,
          data.ingredients,
          data.steps,
          data.date,
          data.likes,
          data.comments,
          data.author);
          console.log( this.selectedProduct.comments);
      });
  }

  private getCurrentProduct() {
    this.productService.currentProductId
      .subscribe(product => {
        this.currentProductId = product;
      });
  }

}
