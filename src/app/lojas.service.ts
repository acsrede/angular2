import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LojasService {

  constructor(private http: HttpClient) { }

  public getAll<T>(actionUrl: string): Observable<T> {
    return this.http.get<T>(actionUrl);
  }

}
