import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smart-weather';

  tiles = [
    {text: 'Two', cols: 2, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 4, rows: 1, color: '#DDBDF1'},
  ];
}
