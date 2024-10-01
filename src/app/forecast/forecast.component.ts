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
          temperature: []
    
        };
      }
     // Add null checks for each of the data arrays
     if (this.hourly){
      forecastMap[date].temperature.push(this.hourly.temperature_2m ? this.hourly.temperature_2m[index] : 'N/A');      

    }});

    // Extract the next 7 days
    return Object.values(forecastMap).slice(0, 7);
  }
}
