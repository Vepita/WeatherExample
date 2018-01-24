import { GetWeatherService } from './../get-weather.service';
import { Component, OnInit } from '@angular/core';
import { WeatherItem } from '../weather-item';

@Component({
  selector: 'app-ejemplo-clima',
  templateUrl: './ejemplo-clima.component.html',
  styleUrls: ['./ejemplo-clima.component.css'],
  providers: [GetWeatherService]
})
export class EjemploClimaComponent implements OnInit {

  weather: string;
  cityName: string;
  result: WeatherItem = new WeatherItem('', '', 0, '');
  showResult: boolean = false;
  showError: boolean = false;

  constructor(private serviceWeather: GetWeatherService) { }

  ngOnInit() {

  }

  searchCity() {
    this.serviceWeather.searchWeatherData(this.cityName).subscribe(
      data => {
        let weatherItem = new WeatherItem(data.name, data.weather[0]
          .description, data.main.temp, data.sys.country);
        this.result = weatherItem;
        this.weather = 'Pais: ' + weatherItem.country + ' / Ciudad: ' + weatherItem.cityName + ' / Temperatura:  ' + weatherItem.temperature
        //console.log('El resultado es:' + JSON.stringify(data));
      },
      err => {
        this.showError = true;
        this.showResult = false;
      }
    );
  }


}
