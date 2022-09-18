import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImovelService } from 'src/app/service/imovel.service';
import * as moment from 'moment';
import { Imovel } from 'src/app/models/imovel';
import { TipoImovel } from 'src/app/models/enum/tipoImovel.enum';

@Component({
  selector: 'app-imovel-cadastrar',
  templateUrl: './imovel-cadastrar.component.html',
  styleUrls: ['./imovel-cadastrar.component.css']
})
export class ImovelCadastrarComponent implements OnInit {

  imovel: Imovel[] = [];
  formCadastro!: FormGroup;
  validacaoFormulario : boolean = false;
  tipoSelect: TipoImovel[] = Object.values(TipoImovel);
  sim : boolean = true;
  nao: boolean = false;
  

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private imovelService: ImovelService,
  ) { }

  ngOnInit(): void {
    this.criandoForm();
  }

  private criandoForm(): void {
    const dataAnuncio = moment().format('YYYY-MM-DD')

    
    this.formCadastro = this.fb.group({
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
        dataAnuncio: [dataAnuncio],
        proprietarioId: [null],
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
    if (this.formCadastro.invalid) {
      this.validacaoFormulario = true;
      return;
    }
     const dados = this.formCadastro.value;
      this.imovelService.createProprieatrio(dados).subscribe((resposta)=>{
      this.voltarPagina();
    })
  }

  getCep(){
    const form = this.formCadastro.value;
    const cep = form.endereco.cep;
    this.imovelService.getCep(cep).subscribe((res)=>{
      let dadosCep = res;
      let objCep = {
        rua: dadosCep.logradouro,
        bairro: dadosCep.bairro,
        cidade: dadosCep.localidade,
        uf: dadosCep.uf,
      }
      this.formCadastro.get('endereco')?.patchValue(objCep)
    })
    
  }
  

  voltarPagina(): void {
    this.router.navigate(['imovel']);
  }

}
