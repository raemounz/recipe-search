import { Component, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../../../../src/app/shared/recipe.service';
import { Recipe } from '../../../../src/app/shared/recipe';
import { Nutrient } from '../../../../src/app/shared/nutrient';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
    from = 0;
    to = 15;
    count = 0;
    inProgress = false;
    searchItem: string;
    recipes: Recipe[] = [];
    selectedRecipeIndex = 0;
    @Output() selectedRecipe = new EventEmitter<Recipe>();

    constructor(private recipeService: RecipeService) {}

    search(searchItem: string, initial: boolean = true) {
        if (initial) {
            this.from = 0;
            this.to = 15;
            this.recipes = [];
            this.sendSelectedRecipe(-1);
        }
        this.inProgress = true;
        this.searchItem = searchItem || '';
        this.recipeService.getRecipes(searchItem, this.from, this.to).subscribe((data: any) => {
            this.count = data.count;
            data.hits.forEach((hit: any) => {
                const hitRecipe = hit.recipe;
                const hitNutrients = hitRecipe.totalNutrients;
                const nutrientList: Nutrient[] = Object.keys(hitNutrients).map(key => {
                    const nutrient = hitNutrients[key];
                    return {
                        label: nutrient.label,
                        quantity: nutrient.quantity,
                        unit: nutrient.unit
                    }
                });
                this.recipes.push({
                    uri: hitRecipe.uri,
                    label: hitRecipe.label,
                    image: hitRecipe.image,
                    source: hitRecipe.source,
                    sourceUrl: hitRecipe.url,
                    dietLabels: hitRecipe.dietLabels,
                    healthLabels: hitRecipe.healthLabels,
                    ingredients: hitRecipe.ingredientLines,
                    calories: hitRecipe.calories,
                    nutrients: nutrientList
                });
            });
            if (initial) {
                this.sendSelectedRecipe(0);
            }
        }, error => {
            console.log(error);
            this.inProgress = false;
        }, () => {
            this.inProgress = false;
        });
    }

    onScroll() {
        if (this.to <= this.count) {
            this.from = this.to + 1;
            this.to += 15;
            if (this.to > this.count) {
                this.to = this.count;
            }
            this.search(this.searchItem, false);
        }
    }

    sendSelectedRecipe(index: number) {
        this.selectedRecipeIndex = index;
        this.selectedRecipe.emit(this.recipes[index]);
    }
}
