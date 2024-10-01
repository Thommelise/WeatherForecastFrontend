import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CurrentWeather {
  temperature: number;
  interval: number;
  winddirection: number;
  weathercode: number;
  time: string;
  isday:boolean;
}

export interface Hourly {
  time: string[];
  temperature_2m: number[]; 
}

export interface HourlyUnits{
  temperature_2m: string;
}

export interface WeatherResponse {
  latitude: number;
  longitude: number;  
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: HourlyUnits;
  hourly: Hourly;
  current_weather: CurrentWeather;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://localhost:8080/api/weather';

  constructor(private http: HttpClient) { }

  getWeatherData(latitude: number = 56.1518, longitude: number = 10.2064): Observable<WeatherResponse> {
    let params = new HttpParams()
      .set('latitude', latitude.toString())
      .set('longtitude', longitude.toString());

    return this.http.get<WeatherResponse>(this.apiUrl, { params });
  }
}
