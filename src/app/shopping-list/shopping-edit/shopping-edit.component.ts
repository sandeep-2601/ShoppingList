import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName', { static: false }) inputNameRef: ElementRef;
  @ViewChild('inputQuantity', { static: false }) inputQuantityRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  addItem(): void {
    const name = this.inputNameRef.nativeElement.value;
    const quantity = parseInt(this.inputQuantityRef.nativeElement.value);
    const newIngredient = new Ingredient(name,quantity);
    this.ingredientAdded.emit(newIngredient)  ;
  }
  deleteItem(): void {

  }
  resetList(): void {

  }

}
