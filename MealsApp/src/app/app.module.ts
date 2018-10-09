import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipeListComponent } from './recipies/recipe-list/recipe-list.component';
import { ReciperDetailComponent } from './recipies/reciper-detail/reciper-detail.component';
import { RecipeItemComponent } from './recipies/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      RecipiesComponent,
      RecipeListComponent,
      ReciperDetailComponent,
      RecipeItemComponent,
      ShoppingListComponent,
      ShoppingEditComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
