import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalutiDataService {

  constructor(private httpClient: HttpClient) { }

  //getSaluti è un observable che restituisce un oggetto
  getSaluti = (nome: string): Observable<Object> => this.httpClient.get('http://localhost:8050/api/saluti/' + nome)
}
