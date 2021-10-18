import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { User } from '../user';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userDetails !: User 
  userRepositories!: Repo;
   constructor(private serviceService: ServicesService ) {}
 
   ngOnInit(): void {
     this.getdetailsUser('monginadiana');
     this.getdetailsRepo('monginadiana');
   }
   getdetailsUser(gitUsername: any) {
    this.serviceService.getprofile(gitUsername).then(
      (response) => {
        this.userDetails = this.serviceService.userDetails;
        console.log(this.userDetails);
      },
      (error) => {
        console.log(error);
      }
    
    );
  } 
  getdetailsRepo(gitUsername: any) {
    this.serviceService.getrepo(gitUsername).then(
      (response) => {
        this.userRepositories = this.serviceService.repoDetails;
        console.log(this.userRepositories);
      },
      (error) => {
        console.log(error);
      }
    
    );
  } 

}
