import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-nums',
  templateUrl: './floating-nums.component.html',
  styleUrls: ['./floating-nums.component.sass']
})
export class FloatingNumsComponent implements OnInit {
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom:number;
 
 
  ngOnInit() {
    this.setCurrentLocation();
  }
 
    // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }
}
