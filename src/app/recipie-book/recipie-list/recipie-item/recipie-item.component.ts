import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import { Recipie } from '../../recipe.model';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {
  @Output("detail") recipieDetailEvent = new EventEmitter<void>();
  @Input() recipie: Recipie;
  constructor() { }

  ngOnInit(): void {
  }
  recipieDetail(event): void {
    this.recipieDetailEvent.emit();
  }
}
