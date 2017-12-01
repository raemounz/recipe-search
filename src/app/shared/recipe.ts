import { Ingredient } from './ingredient';

export class Recipe {
  uri: string;
  label: string;
  image: string;
  source: string;
  ingredients: Ingredient[];
}
