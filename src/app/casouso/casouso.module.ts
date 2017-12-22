import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

import { ListagemModule } from './../listagem/listagem.module';
import { CasousoEditarComponent } from './casouso-editar.component';
import { CasousoListagemComponent } from './casouso-listagem.component';

@NgModule({
    declarations:[
        CasousoListagemComponent,
        CasousoEditarComponent
    ],
    imports:[
        ListagemModule,
        FormsModule,
        CommonModule
    ],
    exports:[
        CasousoListagemComponent,
        CasousoEditarComponent
    ]
})
export class CasousoModule{

}