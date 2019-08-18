import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeComponent } from './recipe/recipe.component';
import { MaterialModule } from './shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RecipeListComponent } from './recipe/list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/detail/recipe-detail.component';
import { RecipeService } from './shared/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AutoFocusDirective } from './shared/autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    AutoFocusDirective,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
