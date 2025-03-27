import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { HomeComponent } from './home/home.component';
import { HorariosComponent } from './horarios/horarios.component';
import { LoginComponent } from './login/login.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { EditarComponenteComponent } from './editar-componente/editar-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportesComponent,
    LoginComponent,
    HomeComponent,
    HorariosComponent,
    ComponentesComponent,
    PrestamosComponent,
    EditarComponenteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
