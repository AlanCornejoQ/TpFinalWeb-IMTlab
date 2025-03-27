import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Componente } from '../Models/component.model';
import { ComponentesService } from '../services/componentes.service';

@Component({
  selector: 'app-editar-componente',
  standalone: false,
  templateUrl: './editar-componente.component.html',
  styleUrl: './editar-componente.component.css',
})
export class EditarComponenteComponent {
  componenteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private componenteService: ComponentesService,
    private router: Router
  ) {
    this.componenteForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  agregarComponente() {
    if (this.componenteForm.valid) {
      const componente: Componente = Object.assign(
        {},
        this.componenteForm.value
      );
      this.componenteService.create(componente).subscribe();
      console.log(this.componenteForm.value);
      this.router.navigate(['/componentes']);
    }
  }
}
