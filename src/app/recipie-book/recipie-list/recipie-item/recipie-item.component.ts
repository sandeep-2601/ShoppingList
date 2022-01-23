import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipie } from '../../recipe.model';
import { RecipieBookService } from '../../recipie-book.service';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {
  @Input() recipie: Recipie;
  constructor(private recipieBookService: RecipieBookService) { }
  ngOnInit(): void {
  }
  recipieDetail(): void {
    this.recipieBookService.recipieDetailEvent.emit(this.recipie);
  }
}
