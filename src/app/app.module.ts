import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeSercive } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
// import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AdminComponent } from './admin/admin.component';
import { ManageUserComponent } from './admin/manage-user/manage-user.component';
import { ItemStorageComponent } from './admin/item-storage/item-storage.component';
import { StorageEditComponent } from './admin/item-storage/storage-edit/storage-edit.component';
import { storageService } from './admin/item-storage/storage.service';
import { UserEditComponent } from './admin/manage-user/user-edit/user-edit.component';
import { UserServices } from './admin/manage-user/user.service';





@NgModule({
    declarations: [
        AppComponent,
        headerComponent,
        RecipesComponent,
        RecipesListComponent,
        RecipesDetailComponent,
        RecipesItemComponent,
        ShoppingListComponent,
        ShoppingEditComponent,
        DropdownDirective,
        RecipeStartComponent,
        RecipeEditComponent,
        AuthComponent,
        LoadingSpinnerComponent,
        AdminComponent,
        ManageUserComponent,
        ItemStorageComponent,
        StorageEditComponent,
        UserEditComponent
        

    ],
    providers: [ShoppingListService,RecipeSercive, storageService, UserServices, DataStorageService   ],
    // ,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule
        
    ]
})
export class AppModule { }
