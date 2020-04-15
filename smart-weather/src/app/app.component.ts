import { Component, OnInit } from '@angular/core';
import { IEvent } from 'angular8-yandex-maps';
import { WeatherService } from './../services/weather.service';
import { Weather, DayPartWeather } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weatherService: WeatherService){}

  dayWeather = new DayPartWeather();

  xCoor = '55.75396';
  yCoor = '37.620393';

  mclick($event: any): void {
     console.log($event);
  }

  updateWeather() {
    this.weatherService.getWeather(this.xCoor, this.yCoor).subscribe((data) => {
      this.dayWeather = data['forecasts']['0']['parts']['day_short']
      console.log(this.dayWeather);
    });
  }

  ngOnInit() {
    this.updateWeather();
  }

  onMouse(event: IEvent): void {
    this.xCoor = event.event['_sourceEvent']['originalEvent']['coords']['0'].toString();
    this.yCoor = event.event['_sourceEvent']['originalEvent']['coords']['1'].toString();

    this.updateWeather();
  }
}
