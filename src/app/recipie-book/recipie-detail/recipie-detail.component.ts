import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipie } from '../recipe.model';
import { RecipieBookService } from '../recipie-book.service';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {
  recipieDetail: Recipie;
  constructor(private recipieBookService: RecipieBookService,private route:ActivatedRoute,private router: Router){ }
  ngOnInit(): void {
    // this.recipieDetail = this.recipieBookService.getRecipieDetail(+this.route.snapshot.params['id']);
    this.route.params.subscribe(
      (params:Params)  => {
        this.recipieDetail = this.recipieBookService.getRecipieDetail(+params['id']);
      }
    )
  }
  addIngredients(): void {
    this.recipieBookService.addIngredients(this.recipieDetail.ingredients);
    this.router.navigate(['/shopping'])
  }
}
