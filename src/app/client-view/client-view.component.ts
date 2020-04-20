import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.sass']
})
export class ClientViewComponent implements OnInit {
  public rows: any;
  public checks: any;
  public testObj: TestObj;
  public errorMessage: string;
  public searchString: string = "";
  public phoneNumber: string = "";

  public view: any[] = [500, 400];

  public data: any;

  // options
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = false;
  public showXAxisLabel = true;
  public xAxisLabel = 'Number';
  public showYAxisLabel = true;
  public yAxisLabel = 'Color Value';
  public timeline = true;

  public colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.rows = [];
    this.getClients();
    this.addClient();
    this.errorMessage = "";
    this.testObj = new TestObj();

    this.checks = [
      {"name": "Will", "value": "True", "checked": false},
      {"name": "Homie", "value": "True", "checked": false},
      {"name": "Quan", "value": "True", "checked": false}
    ]

    console.log(this.getGraph());
  }

  onSelect(event) {
    console.log(event);
  }

  getClients(){
    const customHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json');

    this.http.get("https://gmr-python.herokuapp.com/getClients", {headers: customHeaders}).subscribe(
      response => {
        this.rows = response;
        console.log(this.rows)
      },
      error => {
        console.log(error)
      }
    );
  }

  addClient(){
    const customHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json');

    this.http.get("https://gmr-python.herokuapp.com/addClient", {headers: customHeaders}).subscribe(
      response => {
        console.log(response);
        let addClientResponse: any = response;

        if(addClientResponse.Failure){
          this.errorMessage = addClientResponse.Failure;
        }
        else{
          console.log("Passed and worked");
        }
      }
    );
  }

  getGraph(){
    const customHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json');

    this.http.get("https://gmr-python.herokuapp.com/getGraph", {headers: customHeaders}).subscribe(
      response => {
        console.log(response);

        this.data = response;
      }
    );
  }

  testMethod(){
    console.log("####### RAW NUMBER FROM INPUT ###########")
    console.log(this.phoneNumber);

    console.log("####### TYPE OF PHONE NUMBER ###########")
    console.log(typeof this.phoneNumber)

    console.log("####### FORMATTED PHONE NUMBER ###########")


    this.phoneNumber = this.phoneNumber.substr(0, 3) + "-" +
                       this.phoneNumber.substr(4, 3) + "-" +
                       this.phoneNumber.substr(6)

    console.log(this.phoneNumber);

  }
}

export class TestObj{
  public firstname: string;
  public lastname: string;
  public middlename: string;
}
