import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './recipe';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecipeService {
    apiUrl = `https://api.edamam.com/search?app_id=${environment.app_id}&app_key=${environment.app_key}`;

    constructor(private http: HttpClient) {}

    getRecipes(q: string, from: number, to: number): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(`${this.apiUrl}&q=${q}&from=${from}&to=${to}`);
    }
}
