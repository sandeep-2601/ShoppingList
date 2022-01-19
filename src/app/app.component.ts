import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickedText: string = 'Recipie List';
  clickedLink(event: string) {
    this.clickedText = event; 
  }
}
