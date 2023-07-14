import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simple test','https://www.washingtonpost.com/resizer/gAqD0qui8pBZT1HcvLXlpKWU1rY=/arc-anglerfish-washpost-prod-washpost/public/VRR6IGG37LD57PIPDASAGEPHEY.jpg'),
    new Recipe('A test recipe', 'This is simple test','https://www.washingtonpost.com/resizer/gAqD0qui8pBZT1HcvLXlpKWU1rY=/arc-anglerfish-washpost-prod-washpost/public/VRR6IGG37LD57PIPDASAGEPHEY.jpg')
  ];
  constructor(){

  }
}
