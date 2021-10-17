import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  

  constructor(private httpClient:HttpClient) { 

  }
  getrepo():Observable<any[]>{
    return this.httpClient.get<any[]>(`https://api.github.com/users/monginadiana/repos`)
  }
    
  }


2
