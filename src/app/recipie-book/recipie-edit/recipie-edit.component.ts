import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipie } from '../recipe.model';
import { RecipieBookService } from '../recipie-book.service';

@Component({
  selector: 'app-recipie-edit',
  templateUrl: './recipie-edit.component.html',
  styleUrls: ['./recipie-edit.component.css']
})
export class RecipieEditComponent implements OnInit {
  recipieDetail: Recipie;
  id: number;
  editMode: boolean = false;
  editForm: FormGroup;
  constructor(private route: ActivatedRoute, private recipieBookService: RecipieBookService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
      }
    );
    
    this.formInit();
  }

  private formInit() { 
    this.recipieDetail = this.recipieBookService.getRecipieDetail(this.id);
    let recipieName = '';
    let recipieImageUrl = '';
    let recipieDescription = '';
    let recipieIngredinets = new FormArray([]);
    if(this.editMode) {
      recipieName = this.recipieDetail.name;
      recipieImageUrl = this.recipieDetail.imageUrl;
      recipieDescription = this.recipieDetail.description;
      if(this.recipieDetail['ingredients']) {
        for(let ingredient of this.recipieDetail.ingredients) {
            recipieIngredinets.push(
              new FormGroup({
                'name':new FormControl(ingredient.name),
                'quantity':new FormControl(ingredient.quantity)
              }));
        }
      }
    }
    this.editForm = new FormGroup({
      'name': new FormControl(recipieName),
      'imageUrl': new FormControl(recipieImageUrl),
      'description': new FormControl(recipieDescription)
    });
  }
  onSubmit() {

  }

}
