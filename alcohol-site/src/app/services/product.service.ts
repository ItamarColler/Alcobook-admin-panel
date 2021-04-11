import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productCollection = new Subject<Comment>();
  private products: Product[] = [
    new Product(
      "Water Melon Drink",
      "https://img.delicious.com.au/CKMUcpx-/w1200/del/2015/11/summer-cocktails-24374-3.jpg",
      "Watermelon and vodka ",
      ["1.5lt of freshly squeezed watermelon juice",
        "6 green limes, cut into quarters.",
        "300ml chilled vodka",
        "1lt soda",
        "10 sprigs of mint",
        "30 pitted olives",
        "100g of fetta, cut into 20 cubes",
        "Ice"],
      ["Squeeze all the limes bar two quarters into a la)",
        "Garnish with a little plume of mint "],
      new Date("4/7/2020"),
      6,
      3,
      "Matt preston"),
    new Product(
      "Water Melon Drink",
      "https://img.delicious.com.au/CKMUcpx-/w1200/del/2015/11/summer-cocktails-24374-3.jpg",
      "Watermelon and vodka is a combination that always rings party bells for Matt Preston. Add mint, a little garnish of a feta and olive skewer and you've recreated the ﬂavours a classic summer salad!"
      , ["1.5lt of freshly squeezed watermelon juice; from 3kg of watermelon",
        "6 green limes, cut into quarters.",
        "300ml chilled vodka",
        "1lt soda",
        "10 sprigs of mint",
        "30 pitted olives",
        "100g of fetta, cut into 20 cubes",
        "Ice"],
      ["Squeeze all the limes bar two quarters int",
        "Just before the guests arrive, run the remaining lime ",
        "Garnish with a little plume of mint and a skewer"],
      new Date("4/7/2020"),
      6,
      3,
      "Matt preston"),
    new Product(
      "Water Melon Drink",
      "https://img.delicious.com.au/CKMUcpx-/w1200/del/2015/11/summer-cocktails-24374-3.jpg",
      "Watermelon and vodka is a "
      , ["1.5lt of freshly squeezed watermelon juice; ",
        "6 green limes, cut into quarters.",
        "300ml chilled vodka",
        "1lt soda",
        "10 sprigs of mint",
        "30 pitted olives",
        "100g of fetta, cut into 20 cubes",
        "Ice"],
      ["Squeeze all the limes bar two quarters into a large jug. Top with the watermelon juice and give it a good stir. Place in the fridge until the guests arrive. Chill the glasses.",
        "Just before the guests arrive, run the remaining lime quarters around the rim of each chilled glass Add the vodka to the watermelon juice and stir. Fill each glass with ice and the pour over the watermelon taking care to restrain the lime wedges from dropping into each glass. Using a sieve or a wooden spoon to help you achieve this. (Add the wedges if you want their green in the glass).",
        "Garnish with a little plume of mint and a skewer of olives and two cubes of fetta."],
      new Date("4/7/2020"),
      6,
      3,
      "Matt preston")
  ];
  constructor() { }

  getProducts() {
    return this.products.slice();

  }
  getProduct(index: number)
  {
    return this.products[index];
  }
}
