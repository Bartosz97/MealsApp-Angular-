import { Recipe } from './../recipies/recipe.model';
import { RecipeService } from './../recipies/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService) {

    }

    storeRecipes() {
        return this.http.put('https://recipebook-e10a2.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get('https://recipebook-e10a2.firebaseio.com/recipes.json')
        .pipe(map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (const recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        ))
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}
