import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultacepService {

  private apiUrl = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) { }

  consultar(cep: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${cep}/json/`);
  }
}
