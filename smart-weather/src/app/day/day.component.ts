import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../services/weather.service';
import { Weather, DayPartWeather } from './../models/weather.model';


@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  parts: DayPartWeather[] = [];

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe((data) => {
      this.parts.push(data['forecasts']['0']['parts']['night'])
      this.parts.push(data['forecasts']['0']['parts']['morning'])
      this.parts.push(data['forecasts']['0']['parts']['day'])
      this.parts.push(data['forecasts']['0']['parts']['evening'])

      this.parts[0].title = "Ночью"
      this.parts[1].title = "Утром"
      this.parts[2].title = "Днем"
      this.parts[3].title = "Вечером"

      console.log(this.parts[0].temp_min);
      this.parts.forEach(function (item, i, arr) {
        item.icon = "https://yastatic.net/weather/i/icons/blueye/color/svg/" + item.icon + ".svg";
      });
    })
}


}
