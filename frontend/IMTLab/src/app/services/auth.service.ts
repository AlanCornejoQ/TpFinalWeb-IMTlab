import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../envionments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly resourceUrl: string;

  constructor(private http: HttpClient) {
    this.resourceUrl = '/Login';
  }

  login(username: string, password: string): Observable<any> {
    const url: string = `${environment.apiUrl}${this.resourceUrl}`;
    const body = { username, password };
    return this.http.post<any>(url, body);
  }
}
