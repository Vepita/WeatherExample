export class WeatherItem {

    nombreCiudad: string;
    descripcion: string;
    temperatura:number;
    pais: string
    
    constructor(public cityName: string, public description: string, public temperature: number, public country: string) { 
        this.nombreCiudad= cityName;
        this.descripcion = description;
        this.temperatura = temperature;
        this.pais = country;
    }
    
}
