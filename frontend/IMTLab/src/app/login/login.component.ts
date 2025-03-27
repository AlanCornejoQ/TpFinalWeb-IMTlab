import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe(
      (response) => {
        // Aquí puedes almacenar el token de autenticación o cualquier otro dato necesario
        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/dashboard']); // Redirigir a la página principal o dashboard
      },
      (error) => {
        this.errorMessage = 'Usuario o contraseña incorrectos';
        console.error('Error de login', error);
      }
    );
  }
}
