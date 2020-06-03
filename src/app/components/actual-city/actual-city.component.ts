import { Component, OnInit } from '@angular/core';
import { CurrentPositionService } from 'src/app/services/current_position/current-position.service';


@Component({
  selector: 'app-actual-city',
  templateUrl: './actual-city.component.html',
  styleUrls: ['./actual-city.component.css'],
  providers:[CurrentPositionService]
})
export class ActualCityComponent implements OnInit {
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  constructor() {
 
   }

  ngOnInit(): void {
  this.setCurrentLocation();
  /*
    this.latitude=this._currentPosition.latitude
    console.log(this.latitude)
    */
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
  }

}
