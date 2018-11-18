import { Recipe } from './../recipies/recipe.model';
import { RecipeService } from './../recipies/recipe.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {

    }

    storeRecipes() {
        const token = this.authService.getToken();
  //      const headers = new HttpHeaders().set('Authorization', 'Bearer safdfaf');

        return this.httpClient.put('https://recipebook-e10a2.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
            observe: 'body',
            params: new HttpParams().set('auth', token)
   //         headers: headers
        });
    }

    getRecipes() {
        const token = this.authService.getToken();

        this.httpClient.get<Recipe[]>('https://recipebook-e10a2.firebaseio.com/recipes.json?auth=' + token, {
            observe: 'body',
            responseType: 'json'
        })
        .pipe(map(
            (recipes) => {
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
