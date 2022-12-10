import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurantData } from './restaurant.model';


@Component({
  selector: 'app-restaurant-dash',
  templateUrl: './restaurant-dash.component.html',
  styleUrls: ['./restaurant-dash.component.scss']
})
export class RestaurantDashComponent implements OnInit {

  formValue!:FormGroup
  restaurantModelObj :RestaurantData = new RestaurantData
  //we are calling service here 
  allRestaurantData:any
  constructor(private formBuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      name:[''],
      email:[''],
      mobile:[''],
      address:[''],
      services:[''],
      
    })
    this.getAllData()
  }
  //Here we are subscribing our data which is mapped in services
  addRestaurant(){
    this.restaurantModelObj.name=this.formValue.value.name;
    this.restaurantModelObj.email=this.formValue.value.email;
    this.restaurantModelObj.mobile=this.formValue.value.mobile;
    this.restaurantModelObj.address=this.formValue.value.address;
    this.restaurantModelObj.service=this.formValue.value.service;
  
    this.api.postRestaurant(this.restaurantModelObj).subscribe(res=>{
      console.log(res);
      alert("Successful");
      this.formValue.reset()
    
    },
    err=>{alert("Error")}) }

    //Get All data method
    getAllData(){
      this.api.getRestaurant().subscribe(res=>{this.allRestaurantData=res})
    }

}
