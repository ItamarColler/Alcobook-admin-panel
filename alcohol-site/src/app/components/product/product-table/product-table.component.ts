import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

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
    /*'Description',
    'Ingredients',
    'Steps'*/,
    'Submited',
    /*,'Likes',
  'Comments',
'Publisher'*/];
  ingridientData: number;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.data = data;
      });
  }
}
