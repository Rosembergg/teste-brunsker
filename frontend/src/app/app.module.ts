import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProprietarioPesquisarComponent } from './views/proprietario-pesquisar/proprietario-pesquisar.component';
import { ProprietarioCadastrarComponent } from './views/proprietario-cadastrar/proprietario-cadastrar.component';
import { ProprietarioEditarComponent } from './views/proprietario-editar/proprietario-editar.component';
import { NavComponent } from './template/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImovelPesquisarComponent } from './views/imovel-pesquisar/imovel-pesquisar.component';
import { ImovelCadastrarComponent } from './views/imovel-cadastrar/imovel-cadastrar.component';
import { ImovelEditarComponent } from './views/imovel-editar/imovel-editar.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    ProprietarioPesquisarComponent,
    ProprietarioCadastrarComponent,
    ProprietarioEditarComponent,
    NavComponent,
    ImovelPesquisarComponent,
    ImovelCadastrarComponent,
    ImovelEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
