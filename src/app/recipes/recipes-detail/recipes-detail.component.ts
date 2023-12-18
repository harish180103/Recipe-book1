import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeSercive } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent {
  recipe : Recipe;
  id: number;

  constructor ( private recipeService : RecipeSercive,
    private route:ActivatedRoute, private router: Router){

  }

  ngOnInit(): void{
    this.route.params.subscribe(
      (params: Params) =>{
        this.id= +params['id'];
         this.recipe=this.recipeService.getRecipe(this.id);
        // this.router.navigate(['../', this.id,'edit'], {relativeTo: this.route} );
      }
    )

  }


  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route} );

  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
 
}
