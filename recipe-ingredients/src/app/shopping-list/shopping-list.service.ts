import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {

ingredeientsChanged = new EventEmitter<Ingredient[]>();
 private ingredients:Ingredient[]= [
    new Ingredient('Apples',5),
    new Ingredient('tomatoes',10)
  ];
  constructor() { }

  getIngredients(){
    return this.ingredients.slice()
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredeientsChanged.emit(this.ingredients.slice());

  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredeientsChanged.emit(this.ingredients.slice());
  }
}
