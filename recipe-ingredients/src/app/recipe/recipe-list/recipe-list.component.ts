import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] =[
    new Recipe('A Test Recipe', 'This is a test','https://bcchspatriotpost.com/wp-content/uploads/2018/03/v1.jpg'),
    new Recipe('The Black Panther', 'A billion dollars','https://bcchspatriotpost.com/wp-content/uploads/2018/03/v1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
