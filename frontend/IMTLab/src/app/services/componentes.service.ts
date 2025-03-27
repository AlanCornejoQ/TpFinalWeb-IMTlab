import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../envionments/environment';
import { Componente } from '../Models/component.model';

@Injectable({
  providedIn: 'root',
})
export class ComponentesService {
  private readonly resourceUrl: string;

  constructor(private http: HttpClient) {
    this.resourceUrl = '/Component';
  }

  get(): Observable<Componente[]> {
    const url: string = `${environment.apiUrl}${this.resourceUrl}`;
    return this.http
      .get<Componente[]>(url, {})
      .pipe(
        map((products: Componente[]) =>
          products.map((component) => new Componente(component))
        )
      );
  }

  create(component: Componente): Observable<Componente> {
    const url: string = `${environment.apiUrl}${this.resourceUrl}`;
    return this.http
      .post<Componente>(url, component)
      .pipe(map((component) => new Componente(component)));
  }

  edit(component: Componente): Observable<Componente> {
    const url: string = `${environment.apiUrl}${this.resourceUrl}/${component.id}`;
    return this.http
      .put<Componente>(url, component)
      .pipe(map((component) => new Componente(component)));
  }

  delete(id: number): Observable<Object> {
    const url: string = `${environment.apiUrl}${this.resourceUrl}/${id}`;
    return this.http.delete(url);
  }
}
