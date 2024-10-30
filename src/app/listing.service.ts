import { Injectable } from '@angular/core';
import { Listing } from './types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(private http: HttpClient) { }

  getListing():Observable<Listing[]>{
    return this.http.get<Listing[]>('/api/listing');
  }

}
