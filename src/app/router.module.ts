import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { RecipieBookComponent } from "./recipie-book/recipie-book.component";
import { RecipieDetailComponent } from "./recipie-book/recipie-detail/recipie-detail.component";
import { RecipieEditComponent } from "./recipie-book/recipie-edit/recipie-edit.component";
import { RecipieStartComponent } from "./recipie-book/recipie-start/recipie-start.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
const appRoutes: Routes = [
    {path:'',redirectTo:'recipie',pathMatch:'full'},
    {path:"recipie",component: RecipieBookComponent,
    children:[
    {path:"",component:RecipieStartComponent,pathMatch:'full'},
    {path:"new",component:RecipieEditComponent},
    {path:":id",component: RecipieDetailComponent}, 
    {path:":id/edit",component:RecipieEditComponent},
    ]},
    {path:"shopping",component:ShoppingListComponent}
    
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouter{

}