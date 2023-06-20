
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherDetails:any
  icon:any
sunset:any
sunrise:any
  weatherForm: FormGroup;
 constructor(
  private formBuilder: FormBuilder,
  private weatherService:WeatherService
  ) { }

 ngOnInit() {
this.weatherForm = this.formBuilder.group(
 {
   city: ["",[Validators.required]],
   
 })
}

getCityWeather(){ 
this.weatherService.findCity(this.weatherForm.value.city).subscribe((result)=>{
  console.log(result.result.icon)
console.log(result.result.icon)
this.weatherDetails = result.result
console.log(this.weatherDetails.icon)
console.log(this.weatherDetails.sunset)

this.icon =`https://openweathermap.org/img/wn/${this.weatherDetails.icon}@2x.png `;
this.sunset = new Date(this.weatherDetails.sunset * 1000)
this.sunrise = new Date(this.weatherDetails.sunrise * 1000)

})
}
 }
