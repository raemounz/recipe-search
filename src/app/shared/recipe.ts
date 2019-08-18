import { Nutrient } from './nutrient';

export class Recipe {
    uri: string;
    label: string;
    image: string;
    source: string;
    sourceUrl: string;
    dietLabels: string[];
    healthLabels: string[];
    ingredients: string[];
    calories: number;
    nutrients: Nutrient[];
}
