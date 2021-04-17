import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @Input()
  productEditObj = {
    title: "",
    description: "",
    ingredients: [""],
    steps:[""],
    author: ''
  }
  newIngredient = "";

  ingLength:number;
  stepsLength:number;
  readyToConfirm=false;
  submitted = false;
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.isEdited();
  }
  countIng(){
    return new Array(this.ingLength);
  }
  isEdited() {
    this.productService.getProduct().subscribe((data) => {
      if (data._id != '') {
        this.productEditObj.title = data.title;
        this.productEditObj.description = data.body;
        this.productEditObj.ingredients = data.ingredients;
        this.productEditObj.steps = data.steps;
        this.productEditObj.author=data.author;
        this.ingLength=data.ingredients.length;
        this.stepsLength=data.steps.length;
      }
      console.log(this.ingLength);
      console.log("here"+" "+this.productEditObj.ingredients[2]);
    }
    )
  }
  updateProduct(){
    // this.productService.updateProduct();

  }
  updateTitle(){
  }

  ingReady(){
    return this.readyToConfirm;
  }
  updateClicked(){
    this.readyToConfirm=!this.readyToConfirm;
  }

  updateDescription(){
    this.productService.updateDescription(this.productEditObj.description);
  }
  updateIngredient(index: number){
    this.productService.updateIngredient(this.productEditObj.ingredients[index],index);
  }
  updateStep(index: number){
    this.productService.updateStep(this.productEditObj.steps[index],index);
  }
  updateAuthor(){
    this.productService.updateAuthor(this.productEditObj.title);
  }
  addIngredient(form:NgForm)
  {
    const value = form.value;
    const newIngredient = new String(value.ingredient).toString();
    console.log(newIngredient);
    this.productEditObj.ingredients.push(newIngredient);

    //this.productEditObj.ingredients.push("");
    // this.updateClicked();
  }
  confirmIngredient(){
   // this.productEditObj.ingredients.pop();
   this.updateClicked();
   console.log(this.newIngredient);
    this.productEditObj.ingredients.push(this.newIngredient);
  }
  addStep(form: NgForm)
  {

  }
}
