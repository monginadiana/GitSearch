import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  @ViewChild('e') findGithubReposForm: NgForm
  repo1: string;
  Info ;

  showRepo = false;

  searchGithubRepos(){
    this.repo1=this.findGithubReposForm.value.search;
    console.log(this.repo1);
    
    this.requestRepo.getRepo(this.repo1).then(
      (Response)=>{
        this.Info=this.requestRepo.repoDetails;
        console.log(this.Info);
      },
      (error)=>{
        console.log(error);
      }
    );
    this.showRepo=true;
  }
  constructor(private requestRepo:ServicesService) {}



  ngOnInit(): void {
  }

}