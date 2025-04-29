import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent {

  usuario: Usuario = {
    nome: '',
    email: '',
    senha: ''
  };

  constructor(private usuarioService: UsuarioService) { }

  salvar() {
    this.usuarioService.postCriar(this.usuario).subscribe({
      next: (res) => {
        console.log('Usuário criado com sucesso:', res);
        alert('Usuário criado com sucesso!');
        //this.usuario = { nome: '', email: '', senha: '' };
      },
      error: (err) => {
        console.error('Erro ao criar usuário:', err);
        alert('Erro ao criar usuário.');
      }
    });
  }

  validaEmail() {
    if (this.usuario.email == "" || this.usuario.email.indexOf('@') == -1 || this.usuario.email.indexOf('.') == -1) {
      document.getElementById('email')!.style.borderColor = 'red';
      this.usuario.email = "" // Limpa o campo
    } else {
      document.getElementById('email')!.style.borderColor = '';
    }
  }

}
