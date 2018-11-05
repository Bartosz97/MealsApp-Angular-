import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RecipeEditComponent } from './recipies/recipe-edit/recipe-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipeListComponent } from './recipies/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipies/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeStartComponent } from './recipies/recipe-start/recipe-start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './recipies/recipe.service';
import { DataStorageService } from './shared/data-storage.service';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      RecipiesComponent,
      RecipeDetailComponent,
      RecipeListComponent,
      RecipeItemComponent,
      ShoppingListComponent,
      ShoppingEditComponent,
      DropdownDirective,
      RecipeStartComponent,
      RecipeEditComponent,
      SigninComponent,
      SignupComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpModule,
      FormsModule
   ],
   providers: [ShoppingListService, RecipeService, DataStorageService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
