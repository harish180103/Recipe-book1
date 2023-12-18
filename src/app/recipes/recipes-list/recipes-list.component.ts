import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeSercive } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent  implements OnInit, OnDestroy{
  
  recipes: Recipe[]= [];
  subscription: Subscription;

  constructor (private recipeService: RecipeSercive, private router: Router,
    private route: ActivatedRoute){

  }
  

  ngOnInit(){
    this.subscription= this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes=this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route }) ;

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}


