import 'rxjs/add/operator/map';

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LojasService {

  /*lojasApi = 'https://2tv9vlcydb.execute-api.us-east-1.amazonaws.com/dev/restauranteamerica/lojas';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.lojasApi}`);
  }*/
  
  constructor(private http: HttpClient) { }

	public getAll<T>(actionUrl: string): Observable<T> {
	  return this.http.get<T>(actionUrl);
	}

}
