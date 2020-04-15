import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {

  }

  getWeather(x: string, y: string): Observable<any>{

    return this.httpClient.get(`/v1/forecast?lat=${x}&lon=${y}&extra=true`,  {
      headers: new HttpHeaders().append('X-Yandex-API-Key', '6ae49885-da5d-461f-af42-29d04bc3ec46')
     })
  }
}
