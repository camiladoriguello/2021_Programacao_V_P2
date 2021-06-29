import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Bill } from './bill';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url = "https://calm-anchorage-20290.herokuapp.com/api/v1/bills/"

  constructor(private http: HttpClient) { }

  postBill(bill: Bill): Observable<Bill>{
    return this.http.post<Bill>(this.url, bill)
  }

}
