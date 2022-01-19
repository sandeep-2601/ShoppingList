import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apples",10),
    new Ingredient("Mangoes",40)
  ];
  constructor() { }

  ngOnInit(): void {
  }
  addIngredient(event:Ingredient): void {
     for(let i=0;i<this.ingredients.length;i++) {
        if(this.ingredients[i].name == event.name) {
          this.ingredients[i].quantity+=event.quantity;
          return;
        }
     }
     this.ingredients.push(event);
  }
}
