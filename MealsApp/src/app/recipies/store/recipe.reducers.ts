import { State } from './recipe.reducers';
import { Ingredient } from './../../shared/ingredient.model';
import { Recipe } from './../recipe.model';

export interface FeatureState {
    recipes: State;
}

export interface State {
    recipes: Recipe[];
}

const initialState: State = {
    recipes: [
        new Recipe('Testowy przepis', 'cos tam', 'http://bi.gazeta.pl/im/a0/b1/10/z17504416V,Marek-Kaminski.jpg', [
            new Ingredient('Mięso', 1),
            new Ingredient('Frytki', 20)
        ])
      ];
};
export function recipeReducer(state = initialState, action) {
    return state;
}
