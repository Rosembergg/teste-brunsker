import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Proprietario } from 'src/app/models/proprietario';
import { ProprietarioService } from 'src/app/service/proprietario.service';

@Component({
  selector: 'app-proprietario-editar',
  templateUrl: './proprietario-editar.component.html',
  styleUrls: ['./proprietario-editar.component.css']
})
export class ProprietarioEditarComponent implements OnInit {

  id!: any;
  proprietario: Proprietario[] = [];
  formEditar!: FormGroup;
  validacaoFormulario : boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private proprietarioService: ProprietarioService,
  ) { }

  ngOnInit(): void {
    this.criandoForm();
    this.getIdUrl();
    this.getDadosForm();
  }


  private getIdUrl(){
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.id = id
    });
  }

  private getDadosForm() {
    this.proprietarioService.getProprietario(this.id).subscribe((resposta)=>{
      this.formEditar.patchValue(resposta);
    })
  }

  private criandoForm(): void {
    this.formEditar = this.fb.group({
      nome: [null, Validators.required],
      imovelId: [null, Validators.required],
    });
  }

  salvar() {
    if (this.formEditar.invalid) {
      this.validacaoFormulario = true;
      return;
    }
     const dados = this.formEditar.value;
     this.proprietarioService.editProprietario(this.id ,dados).subscribe((resposta)=>{
      this.voltarPagina();
    })
  }

  excluir() {
    this.proprietarioService.deleteProprietario(this.id).subscribe((resposta) => {
      this.voltarPagina();
    })
  }

  voltarPagina(): void {
    this.router.navigate(['']);
  }

}
