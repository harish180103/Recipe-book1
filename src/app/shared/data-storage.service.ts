import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Recipe } from "../recipes/recipe.model";
import { RecipeSercive } from "../recipes/recipe.service";
import { map, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { UserServices } from "../admin/manage-user/user.service";

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService:RecipeSercive, private userService :  UserServices ,private authService: AuthService){

    }
    storeRecipe(){
        const recipes = this.recipeService.getRecipes();
        return this.http.put('https://shopping-3828d-default-rtdb.firebaseio.com/recipeis.json', recipes)
        .subscribe(response =>{
            console.log(response);
        });
    }

    // userStorage(){
    //     const users = this.userService.getUserItems();
    //     return this.http.put('https://shopping-3828d-default-rtdb.firebaseio.com/recipeis.json', users)
    //     .subscribe(response =>{
    //         console.log(response);
    //     });
    // }

    fetchRecipe(){
        
            return this.http.get<Recipe[]>('https://shopping-3828d-default-rtdb.firebaseio.com/recipeis.json',)
            .pipe(map(recipes =>{
            return recipes.map(recipe => {
                return {...recipe, ingrediets : recipe.ingredients ? recipe.ingredients : []};
            });
        }),
        tap(recipes =>{
            this.recipeService.setRecipe(recipes);
        })
        ) ;
       
       
    }
}

