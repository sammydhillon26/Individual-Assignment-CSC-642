import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AgmMap, MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';


@Component({
  selector: 'app-results-form',
  templateUrl: './results-form.component.html',
  styleUrls: ['./results-form.component.css']
})


export class ResultsFormComponent implements OnInit {
  
  data:any;
  height:any;
  mapPlace:any;
  title="Results Verification Page Samjot Singh"
  latitude: number;
  longitude: number;
  zoom:number;

  constructor(private dataService: DataService, 
    private router: Router,
    private ngZone: NgZone) { 
     
  }
  ngOnInit(): void {
    debugger;
    this.data=this.dataService.getData();
    this.height=this.getHeight();
    this.mapPlace=this.dataService.getPlace();
    this.ngZone.run(() => {
      debugger;

      //verify result
      if (this.mapPlace.geometry === undefined || this.mapPlace.geometry === null) {
        return;
      }
      console.log("Place",this.mapPlace)
      //set latitude, longitude and zoom
      this.latitude = this.mapPlace.geometry.location.lat();
      this.longitude = this.mapPlace.geometry.location.lng();
      this.zoom = 12;
    });
    
  }
  //To set height
  getHeight()
  {
    if(this.data.inches!=0 && this.data.inches!="")
    {
      return this.data.feet +" ft. "+this.data.inches+" in.";
    }
    if(this.data.feet !=0 && this.data.feet != "")
    {
      return this.data.feet+" ft.";
    }
    return this.data.feet;
  }
  onCancel() {
    this.router.navigate(['/survey-form'])
  }
  public resolved(captchaResponse: string) {
  }

}
