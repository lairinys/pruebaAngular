import { Component, OnInit } from '@angular/core';
import { CurrentPositionService } from 'src/app/services/current_position/current-position.service';


@Component({
  selector: 'app-actual-city',
  templateUrl: './actual-city.component.html',
  styleUrls: ['./actual-city.component.css']
})
export class ActualCityComponent implements OnInit {
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  constructor(private _currentPosition : CurrentPositionService) {
 
   }

  ngOnInit(): void {
    this.latitude=this._currentPosition.latitude
    console.log(this.latitude)
  }

}
