import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ConsultaCepComponent } from './componentes/consulta-cep/consulta-cep.component';
import { UsuarioFormComponent } from './componentes/usuario-form/usuario-form.component';
import { ListarUsuarioComponent } from './componentes/listar-usuario/listar-usuario.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'consulta', component: ConsultaCepComponent },
  { path: 'cadastro', component: UsuarioFormComponent },
  { path: 'listar', component: ListarUsuarioComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
