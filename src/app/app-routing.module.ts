import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ConsultaCepComponent } from './componentes/consulta-cep/consulta-cep.component';
import { UsuarioFormComponent } from './componentes/usuario-form/usuario-form.component';
import { ListarUsuarioComponent } from './componentes/listar-usuario/listar-usuario.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'consulta', component: ConsultaCepComponent, canActivate: [AuthGuard] },
  { path: 'cadastro', component: UsuarioFormComponent, canActivate: [AuthGuard] },
  { path: 'cadastro/:id', component: UsuarioFormComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }, //essa linha
  { path: 'listar', component: ListarUsuarioComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
