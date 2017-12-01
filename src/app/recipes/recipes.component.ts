import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { Hit } from '../shared/hit';
import { Recipe } from '../shared/recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Location } from '@angular/common';
import { QueryDataService } from '../shared/query-data.service';


@Component({
  moduleId: module.id,
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  title = 'Search for Recipes';
  value = '';
  prevValue = '';
  hits: Hit[] = [];
  showSpinner = false;
  isBusy = true;
  from = 0;
  to = 15;
  count = 0;
  gridCols = 5;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private recipeService: RecipeService,
              private media: ObservableMedia, private location: Location, private queryDataService: QueryDataService) {
    media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'xs') {
        this.gridCols = 1;
      } else if (change.mqAlias === 'sm') {
        this.gridCols = 2;
      } else if (change.mqAlias === 'md') {
        this.gridCols = 3;
      } else if (change.mqAlias === 'lg') {
        this.gridCols = 5;
      } else if (change.mqAlias === 'gt-lg') {
        this.gridCols = 5;
      }
    });
  }

  ngOnInit() {
    const query = this.activatedRoute.snapshot.paramMap.get('query');
    if (query) {
      this.value = query;
      this.search();
    }
  }

  search() {
    if (this.value) {
      this.showSpinner = true;
      this.location.go('/recipes/' + this.value);
      if (this.prevValue !== this.value) {
        this.hits = [];
        this.prevValue = this.value;
      }
      this.recipeService.getRecipes(this.value, this.from, this.to).subscribe(
        (data) => {
          this.count = data['count'];
          data['hits'].forEach(hit => {
            this.hits.push(hit);
          });
        }, (error) => {
          console.log(error);
        }, () => {
          this.showSpinner = false;
          this.isBusy = false;
        }
      );
    }
  }

  showRecipe(recipe: Recipe) {
    this.queryDataService.queryData = this.value;
    this.router.navigate(['/recipe', recipe.uri.substring(recipe.uri.indexOf('#') + 1)]);
  }

  onScroll() {
    this.isBusy = true;
    if (this.to <= this.count) {
      this.from = this.to + 1;
      this.to = this.to + 15;
      if (this.to > this.count) {
        this.to = this.count;
      }
      this.search();
    }
  }

  onKeyDown(event) {
    if (event.keyCode === 13) {
      this.search();
    }
  }

}
