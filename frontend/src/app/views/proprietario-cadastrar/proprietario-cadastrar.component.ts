import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proprietario } from 'src/app/models/proprietario';
import { ProprietarioService } from 'src/app/service/proprietario.service';

@Component({
  selector: 'app-proprietario-cadastrar',
  templateUrl: './proprietario-cadastrar.component.html',
  styleUrls: ['./proprietario-cadastrar.component.css']
})
export class ProprietarioCadastrarComponent implements OnInit {

  proprietario: Proprietario[] = [];
  formCadastro!: FormGroup;
  validacaoFormulario : boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private proprietarioService: ProprietarioService,
  ) {}

  ngOnInit(): void {
    this.criandoForm();
  }


  private criandoForm(): void {
    this.formCadastro = this.fb.group({
      nome: [null, Validators.required],
      imovelId: [null, Validators.required],
    });
  }

  salvar() {
    if (this.formCadastro.invalid) {
      this.validacaoFormulario = true;
      return;
    }
     const dados = this.formCadastro.value;
    this.proprietarioService.createProprieatrio(dados).subscribe((resposta)=>{
      this.voltarPagina();
    })
  }

  voltarPagina(): void {
    this.router.navigate(['']);
  }
}
