import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuario: Usuario = {
    nome: '',
    email: '',
    senha: ''
  };

  isNome = false;
  isEmail = false;
  isSenha = false;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.usuarioService.getListarPorId(+id).subscribe({
        next: (res) => this.usuario = res,
        error: (err) => console.error('Erro ao buscar usuário:', err)
      });
    }
  }

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

  validaNome() {
    if (this.usuario.nome.length < 10) {
      this.usuario.nome = "";
      document.getElementById('nome')!.style.borderColor = 'red';
      this.isNome = true;
    } else {
      document.getElementById('nome')!.style.borderColor = '';
      this.isNome = false;
    }
  }

  validaEmail() {
    if (this.usuario.email == "" || this.usuario.email.indexOf('@') == -1 ||
      this.usuario.email.indexOf('.') == -1) {
      document.getElementById('email')!.style.borderColor = 'red';
      this.usuario.email = ""; // Limpa o campo
      this.isEmail = true;
    } else {
      document.getElementById('email')!.style.borderColor = '';
      this.isEmail = false;
    }
  }

  validaSenha() {
    if (this.usuario.senha == '' || this.usuario.senha.length < 8) {
      document.getElementById('senha')!.style.borderColor = 'red';
      this.usuario.senha = "";
      this.isSenha = true;
    } else {
      document.getElementById('senha')!.style.borderColor = '';
      this.isSenha = false;
    }
  }



}
