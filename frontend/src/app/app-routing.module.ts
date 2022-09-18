import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImovelCadastrarComponent } from './views/imovel-cadastrar/imovel-cadastrar.component';
import { ImovelEditarComponent } from './views/imovel-editar/imovel-editar.component';
import { ImovelPesquisarComponent } from './views/imovel-pesquisar/imovel-pesquisar.component';
import { ProprietarioCadastrarComponent } from './views/proprietario-cadastrar/proprietario-cadastrar.component';
import { ProprietarioEditarComponent } from './views/proprietario-editar/proprietario-editar.component';
import { ProprietarioPesquisarComponent } from './views/proprietario-pesquisar/proprietario-pesquisar.component';

const routes: Routes = [
  {
    path:'',
    component: ProprietarioPesquisarComponent
  },
  {
    path:'proprietario',
    component: ProprietarioPesquisarComponent
  },
  {
    path:'proprietario/cadastrar',
    component: ProprietarioCadastrarComponent
  },
  {
    path:'proprietario/editar/:id',
    component: ProprietarioEditarComponent
  },
  {
    path: 'imovel',
    component:ImovelPesquisarComponent
  },
  {
    path: 'imovel/cadastrar',
    component:ImovelCadastrarComponent
  },
  {
    path: 'imovel/editar/:id',
    component:ImovelEditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
