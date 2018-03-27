import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] =[
    new Recipe('A Test Recipe', 
    'This is a test',
    'https://bcchspatriotpost.com/wp-content/uploads/2018/03/v1.jpg'
    ,[
      new Ingredient('Greatness',100),
      new Ingredient('Royalty', 100)
    ]),
    new Recipe('The Black Panther', 
    'A billion dollars',
    'https://bcchspatriotpost.com/wp-content/uploads/2018/03/v1.jpg'
     ,[
      new Ingredient('Greatness',100),
      new Ingredient('Royalty', 100)
     ] )
  ];

  constructor(private slService:ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

}
