import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Imovel } from 'src/app/models/imovel';
import { Proprietario } from 'src/app/models/proprietario';
import { ImovelService } from 'src/app/service/imovel.service';
import * as moment from 'moment';

@Component({
  selector: 'app-imovel-pesquisar',
  templateUrl: './imovel-pesquisar.component.html',
  styleUrls: ['./imovel-pesquisar.component.css']
})
export class ImovelPesquisarComponent implements OnInit {

  imoveis?: Imovel[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private imovelService: ImovelService,
  ) { }

  ngOnInit(): void {
    this.getTodosImoveis();
  }

  getTodosImoveis () {
    this.imovelService.getTodosImoveis().subscribe((response) => {
       let novoArray : any = [];
      response.forEach(res => {
        let dataAnuncio = moment(res.dataAnuncio).format('DD/MM/YYYY');
        let tipo = res.tipo[0];
        novoArray.push({...res, dataAnuncio: dataAnuncio, tipo: tipo})
      })
      this.imoveis = response;
    })
  }

  cadastrarImovel(): void {
    this.router.navigate(['imovel/cadastrar']);
  }

}
