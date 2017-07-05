import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output()recipeWasSelected = new EventEmitter<Recipe>();

  public recipes: Recipe[] = [
      new Recipe('A test Recipe', 'This is test', 'https://static01.nyt.com/images/2015/08/14/' +
          'dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg'),
      new Recipe('Another Recipe', 'This is test', 'https://static01.nyt.com/images/2015/08/14/' +
          'dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  public onRecipeSelected(recipe: Recipe) {
      this.recipeWasSelected.emit(recipe);
  }

}
