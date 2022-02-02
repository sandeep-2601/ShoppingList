import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter, Input, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  editMode: boolean = false;
  subscription: Subscription;
  editedIndex: number;
  editedItem: Ingredient;
  @ViewChild('f', { static: true }) form: NgForm;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedIndex = index;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.form.value.name = this.editedItem.name;
      this.form.setValue({
        'name': this.editedItem.name,
        'quantity': this.editedItem.quantity
      })
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  addItem(form: NgForm): void {

    const name = form.value.name;
    const quantity = form.value.quantity;
    
      const newIngredient = new Ingredient(name, quantity);
    if(!this.editMode) {
      this.shoppingListService.addIngredient(newIngredient)
    }
    else {
      this.updateItem(this.editedIndex,newIngredient);
    }
  }
  deleteItem(): void {

  }
  updateItem(index: number,ingredient: Ingredient) {
    this.shoppingListService.ingredients[index] = ingredient;
  }
  resetItem(): void {
    this.editMode = false;
    this.form.resetForm();
  }


}
