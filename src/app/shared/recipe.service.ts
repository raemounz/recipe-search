import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Recipe } from './recipe';
import { Hit } from './hit';

@Injectable()
export class RecipeService {
  recipesUrl = 'https://api.edamam.com/search?';
  recipeUrl = 'http://www.edamam.com/ontologies/edamam.owl%23';
  constructor(private http: HttpClient) {}

  getRecipes(q: string, from: number, to: number): Observable<Hit[]> {
    const query = this.recipesUrl + 'q=' + q + '&from=' + from + '&to=' + to;
    return this.http.get<Hit[]>(query);
  }

  getRecipe(uri: string): Observable<Recipe> {
    return this.http.get<Recipe>(this.recipesUrl + 'r=' + this.recipeUrl + uri);
  }

}
