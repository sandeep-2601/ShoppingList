import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { RecipieBookService } from './recipie-book.service';

@Component({
  selector: 'app-recipie-book',
  templateUrl: './recipie-book.component.html',
  styleUrls: ['./recipie-book.component.css'],
  providers: [RecipieBookService]
})
export class RecipieBookComponent implements OnInit {
  
  constructor() { }
  ngOnInit(): void {
   
  }
 
}
