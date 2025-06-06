import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //Observable é usado para trabalhar com os dados que vêm da api

@Injectable({
  providedIn: 'root'
})
export class Request {
  private apiUrl:string = "https://v6.exchangerate-api.com/v6/b6b80c8c76b37c00d700519f/pair/USD/BRL/2";

  conversionByPair(/* toValue:number, fromValue:number */):Observable<any>{
    return this.http.get(this.apiUrl);
  }

  constructor(private http: HttpClient) { }
}
