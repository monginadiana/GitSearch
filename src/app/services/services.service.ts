import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/component/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  

  constructor(private httpClient:HttpClient) { }
}
