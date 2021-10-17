import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private baseurl = environment.BASEURL

  constructor(private httpClient:HttpClient) { 

  }
  getrepo(username:string):Observable<any[]>{
    const endpoint="users"
    return this.httpClient.get<any[]>(`${this.baseurl}/${endpoint}/${username}/repos`)
  }
    
  }



