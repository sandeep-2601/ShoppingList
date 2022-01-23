import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipe.model';
import { RecipieBookService } from './recipie-book.service';

@Component({
  selector: 'app-recipie-book',
  templateUrl: './recipie-book.component.html',
  styleUrls: ['./recipie-book.component.css'],
  providers: [RecipieBookService]
})
export class RecipieBookComponent implements OnInit {
  recipieDetail: Recipie;
  constructor(private recipieBookService: RecipieBookService) { }
  ngOnInit(): void {
    this.recipieBookService.recipieDetailEvent.subscribe(
      (recipieDetail: Recipie) => {
        this.recipieDetail = recipieDetail
      });
  }

}
