import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs'; //Observable é usado para trabalhar com os dados que vêm da api

@Injectable({
  providedIn: 'root'
})
export class Request {
  private apiKey:string = "b6b80c8c76b37c00d700519f";
  private apiFromValue:string = "";
  private apiToValue:string = "";
  private apiUserValue:number = 0;
  private apiUrl:string = `https://v6.exchangerate-api.com/v6/${this.apiKey}/pair/${this.apiFromValue}/${this.apiToValue}/${this.apiUserValue}`;//"https://v6.exchangerate-api.com/v6/b6b80c8c76b37c00d700519f/pair/USD/BRL/2"

  conversionByPair(toValue:string, fromValue:string, userValue:number):Observable<any>{
    this.apiFromValue = fromValue;
    this.apiToValue = toValue;
    this.apiUserValue = userValue;
    this.apiUrl = `https://v6.exchangerate-api.com/v6/${this.apiKey}/pair/${this.apiFromValue}/${this.apiToValue}/${this.apiUserValue}`;
    return this.http.get(this.apiUrl);
  }

  constructor(private http: HttpClient) { }
}
