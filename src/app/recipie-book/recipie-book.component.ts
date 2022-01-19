import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipe.model';

@Component({
  selector: 'app-recipie-book',
  templateUrl: './recipie-book.component.html',
  styleUrls: ['./recipie-book.component.css']
})
export class RecipieBookComponent implements OnInit {
  recipie: Recipie;
  constructor() { }

  ngOnInit(): void {
  }
  detailedRecipieEvent(recipie): void {
    this.recipie = recipie;
  }
}
