import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../services/weather.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe(data => {
      console.log(data);
    })
  }

}
