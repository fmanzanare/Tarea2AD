import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/Client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  BASE_URL: string = 'http://192.168.192.114:8080/api/client'
  headers = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }


  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.BASE_URL)
  }

  saveClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.BASE_URL, client, {headers: this.headers})
  }
}
