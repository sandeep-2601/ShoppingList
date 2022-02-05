import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "./ingredient.model";

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient("Apples", 10),
        new Ingredient("Mangoes", 40)
    ];

    startedEditing = new Subject<number>();

    constructor() { }

    getIngredient(id: number): Ingredient {
        return this.ingredients[id];
    }
    updateIngredient(index: number, quantity: number) {
        this.ingredients[index].quantity = quantity
    }
    addIngredient(ingredient: Ingredient): void {
        for (let i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i].name == ingredient.name) {
                this.ingredients[i].quantity += ingredient.quantity;
                return;
            }
        }
        this.ingredients.push(ingredient);
    }
    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
    }
}