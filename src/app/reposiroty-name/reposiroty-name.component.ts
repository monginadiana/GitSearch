import { Component, OnInit } from '@angular/core';
import { ServicesService }
 from '../services/services.service';
@Component({
  selector: 'app-reposiroty-name',
  templateUrl: './reposiroty-name.component.html',
  styleUrls: ['./reposiroty-name.component.css']
})
export class ReposirotyNameComponent implements OnInit {

  constructor(private serviceService:ServicesService) { }

  getuserrepo(){
    return this.serviceService.getrepo().subscribe((response:any[])=>{
      console.log(response)
    })
  }

  ngOnInit(): void {
  }

}
