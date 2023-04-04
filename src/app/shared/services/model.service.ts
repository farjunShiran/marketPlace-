import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  constructor(private http: HttpClient) {}

  getModelData(model: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('X-Api-Key', 'ebV8PLhO2MRIOCPe8W0fAA==xFcAE13SzDG1VhpU')
      .set('Content-Type', 'application/json');

    let url = `https://api.api-ninjas.com/v1/cars?model=${model}`;

    return this.http.get(url, { headers });
  }
}
