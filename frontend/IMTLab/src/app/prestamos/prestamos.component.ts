import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Prestamo } from '../Models/prestamo.model';
import { PrestamoService } from '../services/prestamo.service';

@Component({
  selector: 'app-prestamos',
  standalone: false,
  templateUrl: './prestamos.component.html',
  styleUrl: './prestamos.component.css',
})
export class PrestamosComponent {
  prestamos$: Observable<Prestamo[]>;
  constructor(
    private prestamoService: PrestamoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.prestamos$ = this.prestamoService.get();
    this.prestamos$.subscribe();
  }

  // agregarComponente() {
  //   this.router.navigate(['/editarComponente']);
  // }
}
