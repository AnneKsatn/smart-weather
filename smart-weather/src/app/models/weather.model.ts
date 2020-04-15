export class Weather {
  constructor(
    public night: DayPartWeather,
    public morning?: DayPartWeather,
    public day?: DayPartWeather,
    public evening?: DayPartWeather,
  ){}
}

export class DayPartWeather {
  constructor(
    public prec_strength?: number,
    public title?: string,
    public temp_min?: string,
    public temp_max?: string,
    public icon?: string,
    public condition?: string,
    public wind_speed?: string,
    public humidity?: string,
  ){}
}
