// src/app/forecast/forecast.component.ts

import { Component, OnInit } from '@angular/core';
import { WeatherService, Hourly, WeatherResponse } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  hourly: Hourly | null = null;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.fetchHourlyForecast();
  }

  fetchHourlyForecast(): void {
    this.weatherService.getWeatherData().subscribe(
      (data: WeatherResponse) => {
        this.hourly = data.hourly;
      },
      (error) => {
        console.error('Error fetching hourly forecast:', error);
      }
    );
  }

  // Utility method to get forecast data for the next 7 days
  getSevenDayForecast(): any[] {
    if (!this.hourly) return [];

    const forecastMap: { [date: string]: any } = {};

    this.hourly.time.forEach((time, index) => {
      const date = new Date(time).toDateString();
      if (!forecastMap[date]) {
        forecastMap[date] = {
          date: date,
          temperature: [],
          humidity: [],
          rain: [],
          windSpeed: [],
          windDirection: []
        };
      }
    //  forecastMap[date].temperature.push(this.hourly.temperature_2m[index]);
    // forecastMap[date].humidity.push(this.hourly.relative_humidity_2m[index]);
    //  forecastMap[date].rain.push(this.hourly.rain[index]);
    //  forecastMap[date].windSpeed.push(this.hourly.wind_speed_10m[index]);
    //  forecastMap[date].windDirection.push(this.hourly.wind_direction_10m[index]);
    });

    // Extract the next 7 days
    return Object.values(forecastMap).slice(0, 7);
  }
}
