import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { ActualCityComponent } from './components/actual-city/actual-city.component';
import { CurrentPositionService } from './services/current_position/current-position.service'

@NgModule({
  declarations: [
    ActualCityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [CurrentPositionService],
  bootstrap: [ActualCityComponent]
})
export class AppModule { }
