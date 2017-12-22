import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'rxjs/add/operator/map';
import { ListagemModule } from './listagem/listagem.module';
import { Routing } from './app.router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component'
import { AutenticacaoGuard } from "./autenticacao/autenticacao.guard";
import { CasousoModule } from './casouso/casouso.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { StatusComponent } from './status/status.component';
import { BotaoListagemModule } from './listagem/botao-listagem/botao-listagem.module';
import { PaginacaoComponent } from './listagem/paginacao/paginacao.component';
import { ListagemComponent } from './listagem/listagem.component';
import { MenuResponsivoComponent } from './menu-responsivo/menu-responsivo.component';

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    UsuarioComponent,
    StatusComponent,
    MenuResponsivoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Routing,
    ListagemModule,
    CasousoModule,
    BrowserAnimationsModule    
  ],
  providers: [
    AutenticacaoGuard    
  ], 
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
