import { Component, OnInit, OnDestroy } from '@angular/core';

// importing route related code
import { ActivatedRoute, Router } from '@angular/router';
import { HouseService } from '../house.service';
import { HouseHttpService } from '../house-http.service';

//Importing Loader
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css']
})

export class HouseViewComponent implements OnInit, OnDestroy {


  public currentHouse;
  public myHouseId;

  constructor(private _route: ActivatedRoute, private router: Router, private houseService: HouseService, private houseHttpService: HouseHttpService, private spinner: NgxSpinnerService) {
    console.log("Character-view Constructor  called");
  }

  ngOnInit() {
    let myHouseId = this._route.snapshot.paramMap.get('id');
    console.log(myHouseId);
    
    this.spinner.show();

    this.houseHttpService.getSingleHouseInfo(myHouseId).subscribe(

      data => {
        console.log(data);
        this.currentHouse = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }


  ngOnDestroy() {
    console.log("Character View Component Destroyed");
  }

}
