import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../envionments/environment';
import { Prestamo } from '../Models/prestamo.model';

@Injectable({
  providedIn: 'root',
})
export class PrestamoService {
  private readonly resourceUrl: string;

  constructor(private http: HttpClient) {
    this.resourceUrl = '/Prestamos';
  }

  get(): Observable<Prestamo[]> {
    const url: string = `${environment.apiUrl}${this.resourceUrl}`;
    return this.http
      .get<Prestamo[]>(url, {})
      .pipe(
        map((prestamos: Prestamo[]) =>
          prestamos.map((prestamo) => new Prestamo(prestamo))
        )
      );
  }

  create(prestamos: Prestamo): Observable<Prestamo> {
    const url: string = `${environment.apiUrl}${this.resourceUrl}`;
    return this.http
      .post<Prestamo>(url, prestamos)
      .pipe(map((prestamo) => new Prestamo(prestamo)));
  }

  edit(prestamo: Prestamo): Observable<Prestamo> {
    const url: string = `${environment.apiUrl}${this.resourceUrl}/${prestamo.id}`;
    return this.http
      .put<Prestamo>(url, prestamo)
      .pipe(map((prestamo) => new Prestamo(prestamo)));
  }

  delete(id: number): Observable<Object> {
    const url: string = `${environment.apiUrl}${this.resourceUrl}/${id}`;
    return this.http.delete(url);
  }
}
