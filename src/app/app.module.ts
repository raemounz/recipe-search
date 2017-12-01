import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeService } from './shared/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';
import { RecipesComponent } from './recipes/recipes.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeComponent } from './recipe/recipe.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QueryDataService } from './shared/query-data.service';


@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    InfiniteScrollModule,
    AppRoutingModule
  ],
  providers: [
    RecipeService,
    QueryDataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
