import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipie } from '../recipe.model';
import { RecipieBookService } from '../recipie-book.service';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipies: Recipie[] = [];
  constructor(private recipieBookService: RecipieBookService) { }
  ngOnInit(): void {
    this.recipies = this.recipieBookService.recipies;
    console.log(this.recipies);
  }
}
