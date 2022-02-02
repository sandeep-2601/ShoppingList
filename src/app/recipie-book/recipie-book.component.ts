import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { RecipieBookService } from './recipie-book.service';

@Component({
  selector: 'app-recipie-book',
  templateUrl: './recipie-book.component.html',
  styleUrls: ['./recipie-book.component.css'],
  providers: [RecipieBookService]
})
export class RecipieBookComponent implements OnInit, OnDestroy {
  subs: Subscription;
  constructor() { }
  ngOnInit(): void {
    this.subs = interval(1000).subscribe((counter) => {
      console.log(counter);
    })
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
