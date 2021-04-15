import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Product } from '../models/product.model';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  currentProductId = new BehaviorSubject<string>("");
  ingredient: Array<any>;
  steps:Array<any>;
  description: "";
  likes: "";
  date: Date;
  title: "";
  author: "";


  errorMessage = "";
  loginError = new BehaviorSubject<string>("");
  registerError = new BehaviorSubject<string>("");


  private AlcobookUrl = environment.cocktailUrl;
  constructor(private http: HttpClient, private userService: UserService) { }
    getProducts():Observable<Product[]> {
     
    //console.log("df")
      return this.http.get<any>(this.AlcobookUrl);

  }
  getProduct(index: number) {
    // return this.products[index];
  }
  addProduct(product: Product)
  {
    const token = this.userService.getToken(); 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json','Authorization':'Bearer '+token });
    this.http.post<Product>(this.AlcobookUrl,{
      title: product.title,
      
    })


  }
}
