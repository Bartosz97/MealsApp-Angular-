import { Recipe } from './../recipies/recipe.model';
import { RecipeService } from './../recipies/recipe.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {

    }

    storeRecipes() {
     //   const token = this.authService.getToken();
  //      const headers = new HttpHeaders().set('Authorization', 'Bearer safdfaf');

//         return this.httpClient.put('https://recipebook-e10a2.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
//             observe: 'body',
//             params: new HttpParams().set('auth', token)
//    //         headers: headers
//         });
        const req = new HttpRequest('PUT', 'https://recipebook-e10a2.firebaseio.com/recipes.json',
        this.recipeService.getRecipes(), {reportProgress: true});
        return this.httpClient.request(req);
    }

    getRecipes() {
     //   const token = this.authService.getToken();

   //     this.httpClient.get<Recipe[]>('https://recipebook-e10a2.firebaseio.com/recipes.json?auth=' + token, {
        this.httpClient.get<Recipe[]>('https://recipebook-e10a2.firebaseio.com/recipes.json?auth=', {
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
