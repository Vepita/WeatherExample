import { Injectable } from '@angular/core';
import { Http, BaseRequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GetWeatherService {

  private actionUrl: string;
  public headers: Headers;

  // Resolve HTTP using the constructor
  constructor(private http: Http) {
 
  }


  searchWeatherData(cityName: string): Observable<any> {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=684bd34143fc247988bafafc4acd24b4')
      .map(response => response.json())
      .catch(error => {
        return Observable.throw(error.json())
      });

  }

}
