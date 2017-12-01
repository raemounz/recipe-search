import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipe/recipe.component';

const appRoutes: Routes = [
  {path: 'recipes', component: RecipesComponent, pathMatch: 'full'},
  {path: 'recipes/:query', component: RecipesComponent},
  {path: 'recipe/:id', component: RecipeComponent},
  {path: '**', redirectTo: 'recipes'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
