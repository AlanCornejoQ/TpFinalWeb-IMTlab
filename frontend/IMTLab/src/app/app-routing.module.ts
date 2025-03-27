import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesComponent } from './componentes/componentes.component';
import { EditarComponenteComponent } from './editar-componente/editar-componente.component';
import { HomeComponent } from './home/home.component';
import { HorariosComponent } from './horarios/horarios.component';
import { LoginComponent } from './login/login.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'componentes', component: ComponentesComponent },
  { path: 'prestamos', component: PrestamosComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'horarios', component: HorariosComponent },
  { path: 'editarComponente', component: EditarComponenteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
