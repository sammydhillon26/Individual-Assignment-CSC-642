import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data={
    "firstName":"",
    "lastName":"",
    "address":"",
    "zipCode":"",
    "dateOfBirth":"",
    "feet":"",
    "inches":"",
    "education":"",
    "phone":"",
    "email":"",
  }
  map:any;
  getData()
  {
    return this.data;
  }
  getPlace()
  {
    return this.map;
  }
}
