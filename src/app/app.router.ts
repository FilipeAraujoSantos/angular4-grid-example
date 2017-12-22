
import { RouterModule, Routes, RouterLink } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from "./not-found/not-found.component";
import { AutenticacaoGuard } from "./autenticacao/autenticacao.guard";
import { CasousoListagemComponent } from "./casouso/casouso-listagem.component";
import { CasousoEditarComponent } from './casouso/casouso-editar.component';
import { UsuarioComponent } from "./usuario/usuario.component";
import { StatusComponent } from "./status/status.component";

const appRoutes: Routes  = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },  
  { path: 'login', component: LoginComponent },
  { path: 'casouso/listagem', component: CasousoListagemComponent, canActivate: [AutenticacaoGuard], canLoad: [AutenticacaoGuard] },
  { path: 'casouso/editar', component: CasousoEditarComponent, canActivate: [AutenticacaoGuard], canLoad: [AutenticacaoGuard] },
  { path: 'usuario', component: UsuarioComponent, canActivate: [AutenticacaoGuard], canLoad: [AutenticacaoGuard] },
  { path: 'status', component: StatusComponent, canActivate: [AutenticacaoGuard], canLoad: [AutenticacaoGuard] },
  { path: '**', component: NotFoundComponent}
];

export const Routing = RouterModule.forRoot(appRoutes);
