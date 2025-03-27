import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Componente } from '../Models/component.model';
import { ComponentesService } from '../services/componentes.service';

@Component({
  selector: 'app-componentes',
  standalone: false,
  templateUrl: './componentes.component.html',
  styleUrl: './componentes.component.css',
})
export class ComponentesComponent implements OnInit {
  componentes: Componente[] = [];
  constructor(
    private componenteService: ComponentesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.componenteService.get().subscribe((x) => {
      this.componentes = x;
    });
  }

  agregarComponente() {
    this.router.navigate(['/editarComponente']);
  }
}
