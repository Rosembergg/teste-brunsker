import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proprietario } from 'src/app/models/proprietario';
import { ProprietarioService } from 'src/app/service/proprietario.service';

@Component({
  selector: 'app-proprietario-pesquisar',
  templateUrl: './proprietario-pesquisar.component.html',
  styleUrls: ['./proprietario-pesquisar.component.css']
})
export class ProprietarioPesquisarComponent implements OnInit {
  
  proprietarios?: Proprietario[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private proprietarioService: ProprietarioService,
  ) { }

  ngOnInit(): void {
    this.getTodosProprietario();
  }

  getTodosProprietario () {
    this.proprietarioService.getTodosProprietarios().subscribe((response) => {
      this.proprietarios = response;
    })
  }


  cadastrarProprietario(): void {
    this.router.navigate(['proprietario/cadastrar']);
  }
}
