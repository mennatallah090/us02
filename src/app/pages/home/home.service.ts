import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseUrl=environment.baseUrl
  constructor(private http:HttpClient){

  }
  getPopularCars(limit: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}cars?limit=${limit}`);
  }
}
