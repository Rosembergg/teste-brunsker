import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImovelService } from 'src/app/service/imovel.service';
import * as moment from 'moment';
import { Imovel } from 'src/app/models/imovel';
import { TipoImovel } from 'src/app/models/enum/tipoImovel.enum';

@Component({
  selector: 'app-imovel-editar',
  templateUrl: './imovel-editar.component.html',
  styleUrls: ['./imovel-editar.component.css']
})
export class ImovelEditarComponent implements OnInit {

  id!: any;
  imovel: Imovel[] = [];
  formEditar!: FormGroup;
  validacaoFormulario : boolean = false;
  sim : boolean = true;
  nao: boolean = false;
  tipoSelect: TipoImovel[] = Object.values(TipoImovel);

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private imovelService: ImovelService,
  ) { }

  ngOnInit(): void {
    this.criandoForm();
    this.getIdUrl();
    this.getDadosForm();
  }


  private getDadosForm() {
    this.imovelService.getImovel(this.id).subscribe((resposta)=>{
      this.formEditar.patchValue(resposta); 
    })
  }

  teste(date : any) {
    
  }

  private criandoForm(): void {
    this.formEditar = this.fb.group({
        nome: [null, Validators.required],
        tipo: [null, Validators.required],
        valor: [null, Validators.required],
        condominio: [null, Validators.required],
        quartos: [null, Validators.required],
        banheiros: [null, Validators.required],
        mobiliado: [null, Validators.required],
        area: [null, Validators.required],
        venda: [null],
        aluguel: [null],
        proprietarioId: [null],
        dataAnuncio: [],
      endereco: this.fb.group({
        rua: [null, Validators.required],
        numero: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        uf: [null, Validators.required],
        cep: [null, Validators.required],
      })
    });
  }

  salvar() {
    if (this.formEditar.invalid) {
      this.validacaoFormulario = true;
      return;
    }
    const dados = this.formEditar.value;
    console.log(dados);
    this.imovelService.editProprietario(this.id,dados).subscribe((resposta)=>{
     this.voltarPagina();
   })
 }

 private getIdUrl(){
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    this.id = id
  });
}

excluir() {
  this.imovelService.deleteProprietario(this.id).subscribe((resposta) => {
    this.voltarPagina();
  })
}

voltarPagina(): void {
  this.router.navigate(['imovel']);
}

getCep(){
  const form = this.formEditar.value;
  const cep = form.endereco.cep;
  this.imovelService.getCep(cep).subscribe((res)=>{
    let dadosCep = res;
    let objCep = {
      rua: dadosCep.logradouro,
      bairro: dadosCep.bairro,
      cidade: dadosCep.localidade,
      uf: dadosCep.uf,
    }
    console.log(res)
    this.formEditar.get('endereco')?.patchValue(objCep)
  })
  
}

}
