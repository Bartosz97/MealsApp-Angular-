import { AppRoutingModule } from './../app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from '../recipies/recipe.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        RecipeService,
        DataStorageService,
        AuthService
    ]
})
export class CoreModule {}
