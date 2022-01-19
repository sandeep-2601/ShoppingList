import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output("loadPage") loadPageEvent = new EventEmitter<string>();
    shoppingList: string = "shopping list";
    recipieBook: string = "recipie book";
    constructor() {

    }

    loadPage(event): void {
        this.loadPageEvent.emit(event.target.innerText);
    }

}