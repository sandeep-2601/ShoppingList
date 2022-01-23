import { Component, Input, OnInit } from '@angular/core';
import { Recipie } from '../recipe.model';
import { RecipieBookService } from '../recipie-book.service';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {
  @Input() recipieDetail: Recipie;
  constructor(private recipieBookService: RecipieBookService){ }
  ngOnInit(): void {
  }
  addIngredients(): void {
    this.recipieBookService.addIngredients(this.recipieDetail.ingredients);
  }
}
