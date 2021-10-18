import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Repo } from '../repo';
import { User} from '../user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  userDetails:User;
  repoDetails:Repo;

  constructor(private http:HttpClient) { 
    this.userDetails = new User(
      '', '', '', '', 0, 0, new Date()
    
    );
    this.repoDetails=new Repo(
      '', '', '', '', 0
    )
  }
    getProfile(gitUsername){
      interface ApiResponse{
        name: string,
        login:string,
        bio: string,
        avatar_url:string,
        followers: number,
        following: number,
        created_at: Date
  }
      let userPromise = new Promise<void>((resolve, reject) =>
      this.http.get<ApiResponse>(
          environment.BASEURL +
            '/' +
            gitUsername +
            '??access_token=' +
            environment. keyApi
        )
        .toPromise()
        .then(
          (response) => {
            this.userDetails = response;
            resolve();
            console.log(this.userDetails)
          },
          (error) => {
            reject(error);
            console.log(error);
          }
        ))
        return userPromise
        };
       
  
      getRepo(gitUsername){
        interface ApiResponse{
        name:string,
        description:string,
        language: string,
        html_url:string,
        forks: number,
    
    }
        let repoPromise = new Promise<void>((resolve, reject) =>
        this.http.get<ApiResponse>(
            environment.BASEURL +
              '/' +
              gitUsername +
              '/repos?sort=created&direction=desc??access_token=' + environment.keyApi).toPromise().then(
            (response)=>{
              this.repoDetails = response;
              resolve(),
              console.log()
        
            },
            (error) => {
              reject(error);
              console.log(error);
            }
            ))
            return repoPromise
          }
 }
