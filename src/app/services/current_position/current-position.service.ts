import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class CurrentPositionService {

  //latitude: number
  longitude: number

  constructor() {
    this.getCurrentLocation()
    //console.log(this.latitude)
  }

  public getCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setValues(position) 
        
      }); 
    }
  }

  public setValues(position: Position){
    //this.latitude = position.coords.latitude
    this.longitude = position.coords.longitude   
  }

}
