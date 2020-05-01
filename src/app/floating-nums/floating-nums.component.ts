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

  dateString: string = "";
  phoneNumber: string = "";
 
  ngOnInit() {
    this.setCurrentLocation();
  }

  test(){
    console.log({
      "Date:" : this.dateString,
      "Number": this.phoneNumber
    })
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
