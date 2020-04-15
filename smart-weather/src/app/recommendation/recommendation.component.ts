import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Weather, DayPartWeather } from './../models/weather.model';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit, OnChanges {

  @Input('dayWeather') dayWeather: DayPartWeather;
  text = ' ';

  constructor() { }

  ngOnChanges(){
    console.log(this.dayWeather);
    if(this.dayWeather.prec_strength === 0){
      this.text = 'Сегодня осадков не ожидается, зонтик можно не брать';
    }

    if(this.dayWeather.prec_strength === 0.25 || this.dayWeather.prec_strength === 0.5 ){
      this.text = 'Сегодня ожидаются небольшие осадки, рекомендуется одеть плащ и взять зонтик';
    }

    if(this.dayWeather.prec_strength > 0.5 ){
      this.text = 'Сегодня ожидаются очень сильные осадки, рекомендуется одеть плащ и взять зонтик';
    }
  }

  ngOnInit(): void {
    this.ngOnChanges();
  }

}
