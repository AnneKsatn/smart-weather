import { Component, OnInit, OnChanges } from '@angular/core';
import { WeatherService } from './../../services/weather.service';
import { Weather, DayPartWeather } from './../models/weather.model';
import { Input} from '@angular/core';


@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit, OnChanges {

  @Input('xCoor') xCoor: string;
  @Input('yCoor') yCoor: string;

  constructor(private weatherService: WeatherService) { }

  parts: DayPartWeather[] = [];

  ngOnChanges(){
    console.log(this.xCoor);
    console.log(this.yCoor);
    console.log("awddddd");

    this.parts = [];
    this.weatherService.getWeather(this.xCoor, this.yCoor).subscribe((data) => {
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

  ngOnInit(): void {

}


}
