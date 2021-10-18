import { Component, OnInit } from '@angular/core';
// import { Repo } from '../repo';
import { User } from '../user';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userDetails : User; 
  Repositoriesdetails: any;
   constructor(private serviceService: ServicesService ) {}
 
   
   getdetailsUser(gitUsername) {
    this.serviceService.getProfile(gitUsername).then(
      (Response) => {
        this.userDetails = this.serviceService.userDetails;
        console.log(this.userDetails);
      },
      (error) => {
        console.log(error);
      }
    
    );
  } 
  getdetailsRepo(gitUsername) {
    this.serviceService.getRepo(gitUsername).then(
      (Response) => {
        this.Repositoriesdetails =this.serviceService.repoDetails;
        console.log(this.Repositoriesdetails)
      },
      (error) => {
              console.log(error);
            }   
    )
  }
  ngOnInit(): void {
    this.getdetailsUser('monginadiana');
    this.getdetailsRepo('monginadiana');
  }
}
  


