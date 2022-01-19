import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipie } from '../recipe.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  @Output() detailedRecipieEvent = new EventEmitter<Recipie>();
  recipies: Recipie[] = [
    new Recipie('Oat Meal','a delicious oat meal','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2019%2F07%2F27114300%2Foatmeal.jpg'),
    new Recipie('Brown Bread','Wheat rich brown bread 100% wheat','https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Fresh_made_bread_05.jpg/1200px-Fresh_made_bread_05.jpg')
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onDetailView(recipie): void {
    this.detailedRecipieEvent.emit(recipie);
  }
}
