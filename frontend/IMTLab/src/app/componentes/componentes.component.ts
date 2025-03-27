import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Componente } from '../Models/component.model';
import { ComponentesService } from '../services/componentes.service';

@Component({
  selector: 'app-componentes',
  standalone: false,
  templateUrl: './componentes.component.html',
  styleUrl: './componentes.component.css',
})
export class ComponentesComponent implements OnInit {
  componentes$: Observable<Componente[]>;
  constructor(
    private componenteService: ComponentesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.componentes$ = this.componenteService.get();
    this.componentes$.subscribe();
  }

  agregarComponente() {
    this.router.navigate(['/editarComponente']);
  }
}
