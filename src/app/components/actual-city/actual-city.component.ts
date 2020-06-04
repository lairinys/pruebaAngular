import { Component, OnInit } from '@angular/core';
import { CurrentPositionService } from 'src/app/services/current_position/current-position.service';
 
 
@Component({
  selector: 'app-actual-city',
  templateUrl: './actual-city.component.html',
  styleUrls: ['./actual-city.component.css']
})
export class ActualCityComponent implements OnInit {
  latitude: number;
  longitude: number;
  constructor(private currentPosition : CurrentPositionService) {
   }
 
  ngOnInit() {
    this.getPosition();
  }
 
  getPosition(){
    this.currentPosition.getCurrentLocation()
    .then( resp => {
      this.latitude=resp['latitud']
      this.longitude=resp['longitud']
    } )
    .catch( () => console.log('Hay un error'));
  }
}
