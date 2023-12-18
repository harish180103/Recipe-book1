import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
// import { AuthGuard } from "./auth/auth.guard";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
import { RecipesResolverService } from "./recipes/recipes-resolver.service";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { AdminComponent } from "./admin/admin.component";
import { ManageUserComponent } from "./admin/manage-user/manage-user.component";
import { ItemStorageComponent } from "./admin/item-storage/item-storage.component";



const appRoutes: Routes =[
  { path: '', redirectTo: '/recipes', pathMatch: 'full'  },
  { path: 'admin', component : AdminComponent  },
  { path: 'recipes', component :RecipesComponent ,
  // canActivate: [AuthGuard],
  children:[
    { path: '',component: RecipeStartComponent },
    { path: 'new',component: RecipeEditComponent, resolve:[RecipesResolverService] },
    { path: ':id',component: RecipesDetailComponent, resolve:[RecipesResolverService] },
    { path: ':id/edit',component: RecipeEditComponent }
  ]  },
  { path: 'shopping-list', component :ShoppingListComponent },
  { path: 'item-storage', component: ItemStorageComponent },
  { path: 'manage-user', component: ManageUserComponent },
  { path: 'auth', component: AuthComponent  }
  
  
];

@NgModule( {
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

}) 

export class appRoutingModule {

}
