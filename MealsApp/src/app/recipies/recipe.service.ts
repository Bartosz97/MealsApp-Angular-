import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe('Testowy przepis', 'cos tam', 'http://bi.gazeta.pl/im/a0/b1/10/z17504416V,Marek-Kaminski.jpg')
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}
