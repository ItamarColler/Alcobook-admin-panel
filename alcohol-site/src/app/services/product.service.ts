import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Product } from '../models/product.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  ingredient: Array<any>;
  steps: Array<any>;
  description: '';
  likes: '';
  date: Date;
  title: '';
  author: '';
  errorMessage = '';

  currentProduct: Product;
  selectedProduct: BehaviorSubject<Product>;

  currentProductId = new BehaviorSubject<string>('');
  loginError = new BehaviorSubject<string>('');
  registerError = new BehaviorSubject<string>('');
  private statisticsUrl = environment.statisticsUrl
  private AlcobookUrl = environment.cocktailUrl;
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) {}
  getStitistics() {
    return this.http.get<{ [key: string]: any }>(this.statisticsUrl).pipe(
      map((data) => {
        const statisticsArray = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            statisticsArray.push({ ...data[key], id: key });
          }
        }
        return statisticsArray;
      })
    );
  }
  getProducts() {
    //console.log("df")
    return this.http.get<{ [key: string]: Product }>(this.AlcobookUrl).pipe(
      map((data) => {
        const prodArray = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            prodArray.push({ ...data[key], id: key });
          }
        }
        return prodArray;
      })
    );
  }
  getProduct() {
    // return this.products[index];
    const url = this.AlcobookUrl + '/' + this.currentProductId.value;
    return this.http.get<Product>(url);
  }

  deleteProduct(id: string) {
    const token = this.userService.getToken();

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
      body: {
        user: {
          _id: '6076c3e4d145df5910a70ac8',
          username: 'System',
          role: 'Admin',
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlN5c3RlbSIsImlkIjoiNjA3NmMzZTRkMTQ1ZGY1OTEwYTcwYWM4IiwiZXhwIjoxNjIzODcxODQ5LCJpYXQiOjE2MTg2ODc4NDl9.6nFJ9HWZ6-hZ7V3Bhl4H3dyLcowRZk2ZonMlNfeevLg',
        },
      },
    };
    this.http
      .delete(this.AlcobookUrl + '/' + id, options)
      .subscribe((data: any) => {
        this.router.navigate(['/confirm-delete']);
        console.log(data);
      });
  }

  addProduct(product: Product) {
    this.http
      .post<Product>(this.AlcobookUrl, {
        product,
      })
      .subscribe((res) => {
        console.log(res);
      });
  }
  updateTitle(title: string) {
    this.http
      .patch(this.AlcobookUrl + '/' + this.currentProductId.value, {
        title: title,
      })
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/home']);
      });
  }
  updateDescription(description: string) {}
  updateIngredient(ingredient: string, index: number) {}
  updateStep(step: string, index: number) {}
  updateAuthor(author: string) {}
}
