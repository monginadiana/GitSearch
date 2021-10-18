import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@ViewChild ('l') searchProfileForm:NgForm
person:string;
prof:User;
showUser=false;
searchUser(){
  this.person = this.searchProfileForm.value.diana; 
  console.log(this.person)

  this.serviceService.getProfile(this.person).then(
    (Response)=>{
      this.prof=this.serviceService.userDetails;
      console.log(this.prof)
    },
    (error)=>{
      console.log(error);
    });
    
    this.showUser=true;
}


  constructor(private serviceService: ServicesService ) {}

  ngOnInit(): void {
  }

}
