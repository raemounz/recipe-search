import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../shared/recipe.service';
import { Recipe } from '../shared/recipe';
import { QueryDataService } from '../shared/query-data.service';


@Component({
  moduleId: module.id,
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  showSpinner = false;
  recipe: Recipe;
  query: string;
  constructor (private router: Router, private activatedRoute: ActivatedRoute, private recipeService: RecipeService,
               private queryDataService: QueryDataService) {
    this.query = queryDataService.queryData;
  }

  ngOnInit(): void {
    this.showSpinner = true;
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id).subscribe(
      (data) => {
        this.recipe = data[0];
      }, (error) => {
        console.log(error);
      }, () => {
        this.showSpinner = false;
      }
    );
  }

  search() {
    if (this.query) {
      this.router.navigate(['/recipes', this.query]);
    } else {
      this.router.navigate(['/recipes']);
    }
  }
}
