import { Component} from '@angular/core';
import { IEvent } from 'angular8-yandex-maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  xCoor = '55.75396';
  yCoor = '37.620393';

  mclick($event: any): void {
     console.log($event);
  }

  onMouse(event: IEvent): void {
    this.xCoor = event.event['_sourceEvent']['originalEvent']['coords']['0'].toString();
    this.yCoor = event.event['_sourceEvent']['originalEvent']['coords']['1'].toString();
  }
}
