import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeSercive{   

  recipesChanged = new Subject<Recipe[]>();
    // private recipes: Recipe[]= [
    //     new Recipe('Tasty Schnitzel','A super Tasty Schnitzel - just awesome','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1BUK3ty9R51sJFlcXMZcjlEMIxDrh7IT-rg&usqp=CAU ',[
    //         new Ingredient('meat',1),
    //         new Ingredient('French fries', 20)
    //     ] ),
    //     new Recipe('Big Fat Burger','What else you need to say?','https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/4:3/w_1440,h_1080,c_limit/Burgers-Mumbai-Delivery.jpg ', [
    //         new Ingredient('Buns',2),
    //         new Ingredient('meat', 1)
    //     ] )
    //   ];

    private recipes : Recipe[] = [];

       constructor(private slService: ShoppingListService){ }

       setRecipe(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
       }

      getRecipes(){
        return this.recipes.slice();
      }


      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);

      }

      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index]= newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

    deleteRecipe(index: number){
      this.recipes.splice(index,1);
      this.recipesChanged.next(this.recipes.slice());
    }
}
