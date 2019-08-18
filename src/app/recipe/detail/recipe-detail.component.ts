import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
    selectedRecipe: Recipe;
    fats = ['Saturated', 'Trans', 'Monounsaturated', 'Polyunsaturated'];
    carbs = ['Fiber', 'Sugars'];

    setSelectedRecipe(recipe: Recipe) {
        this.selectedRecipe = recipe;
    }

    getNutrients() {
        return this.selectedRecipe.nutrients.filter(nutrient => nutrient.label !== 'Energy');
    }

    indent(label: string) {
        return this.fats.includes(label) || this.carbs.includes(label);
    }
}
