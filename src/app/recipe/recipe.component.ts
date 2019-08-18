import { Component, ViewChild } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { RecipeListComponent } from './list/recipe-list.component';
import { Recipe } from '../shared/recipe';
import { RecipeDetailComponent } from './detail/recipe-detail.component';

@Component({
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
    searchItem: string;
    @ViewChild(RecipeListComponent, {static: false}) recipeList: RecipeListComponent;
    @ViewChild(RecipeDetailComponent, {static: false}) recipeDetail: RecipeDetailComponent;

    constructor(private recipeService: RecipeService) {}

    search() {
        this.recipeList.search(this.searchItem);
    }

    onKeyDown(event: KeyboardEvent) {
        if (event.code === 'Enter') {
            this.search();
        }
    }

    setSelectedRecipe(recipe: Recipe) {
        this.recipeDetail.setSelectedRecipe(recipe);
    }
}
