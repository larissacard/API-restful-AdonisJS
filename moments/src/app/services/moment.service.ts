import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../Moments';

import { environment } from 'src/environments/environment';

import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}v1/moments`

  constructor(private http: HttpClient) { }

  getMoments(): Observable<Response<Moment[]>>{
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  }

  getMoment(id: number):Observable<Response<Moment>> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Response<Moment>>(url);
  }

  createMoment(FormData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, FormData)
  }

  removeMoment(id: number)  {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Response<Moment>>(url);
  }
}
