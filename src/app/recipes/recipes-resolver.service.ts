import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { Recipe } from "./recipe.model";
import { RecipeSercive } from "./recipe.service";

@Injectable( { providedIn:'root' } )
export class RecipesResolverService implements Resolve<Recipe[]> {
    constructor(private dataStorageService : DataStorageService, private recipesService: RecipeSercive){

    }    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.recipesService.getRecipes();
        if(recipes.length ===0){
            return this.dataStorageService.fetchRecipe();
        } else{
            return recipes;
        }
       
    }
}