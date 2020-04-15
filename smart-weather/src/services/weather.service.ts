import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpRequest, HttpEvent } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {

  }

  getWeather(): Observable<any>{

    return this.httpClient.get('/v1/forecast?lat=55.75396&lon=37.620393&extra=true',  {
      headers: new HttpHeaders().append('X-Yandex-API-Key', '6ae49885-da5d-461f-af42-29d04bc3ec46')
     });
  }
}
