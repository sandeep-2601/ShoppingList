import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
@Injectable({ providedIn: 'root' })
export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient("Apples", 10),
        new Ingredient("Mangoes", 40)
    ];

    constructor() { }

    addIngredient(ingredient: Ingredient): void {
        for (let i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i].name == ingredient.name) {
                this.ingredients[i].quantity += ingredient.quantity;
                return;
            }
        }
        this.ingredients.push(ingredient);
    }
}