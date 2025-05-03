import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    //roda ao carregar o componente
    this.listarUsuarios();
  }

  usuarios: Usuario[] = [];

  listarUsuarios() {
    this.usuarioService.getListar().subscribe({
      next: (resposta) => this.usuarios = resposta,
      error: (err) => console.error(err)
    });
  }

  editar(usuario: Usuario) {
    this.router.navigate(['/cadastro', usuario.id]); // rota ex: /cadastro/123
  }

  deletar(id: number) {
    this.usuarioService.deletar(id).subscribe(() => {
      this.listarUsuarios(); // recarrega a lista
    });
  }


}
