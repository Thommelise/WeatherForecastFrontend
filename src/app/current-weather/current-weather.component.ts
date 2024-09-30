// src/app/current-weather/current-weather.component.ts

import { Component, OnInit } from '@angular/core';
import { WeatherService, CurrentWeather, WeatherResponse } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  currentWeather: CurrentWeather | null = null;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.fetchCurrentWeather();
  }

  fetchCurrentWeather(): void {
    this.weatherService.getWeatherData().subscribe(
      (data: WeatherResponse) => {
        this.currentWeather = data.current_weather;
      },
      (error) => {
        console.error('Error fetching current weather:', error);
      }
    );
  }
}
