import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shared/shopping-list.service";
import { Recipie } from "./recipe.model";

@Injectable()
export class RecipieBookService {

    recipies: Recipie[] = [
        new Recipie(1,'Oat Meal', 'a delicious oat meal', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2019%2F07%2F27114300%2Foatmeal.jpg',
            [
                new Ingredient("Oats", 1),
                new Ingredient("Milk", 1),
                new Ingredient("Banana", 1)
            ]),
        new Recipie(2,'Brown Bread', 'Wheat rich brown bread 100% wheat', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Fresh_made_bread_05.jpg/1200px-Fresh_made_bread_05.jpg',
            [
                new Ingredient("Flour", 1),
                new Ingredient("Yeast", 1),
                new Ingredient("Wheat", 1)
            ]
        )
    ]

    constructor(private shoppingListService: ShoppingListService) { }

    addIngredients(ingredients: Ingredient[]): void {
        this.shoppingListService.addIngredients(ingredients);
    }
    getRecipieDetail(id: number) : Recipie {
        for(let i=0;i<this.recipies.length;i++) {
            if( this.recipies[i].id === id) return this.recipies[i];
        }
        return null;
    }
}