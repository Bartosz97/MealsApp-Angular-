import { AuthModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeService } from './recipies/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthGuard } from './auth/auth-guard.service';
import { RecipesModule } from './recipies/recipes.module';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpModule,
      RecipesModule,
      SharedModule,
      ShoppingListModule,
      AuthModule
   ],
   providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
