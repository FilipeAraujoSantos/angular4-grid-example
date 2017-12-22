import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

import { ListagemInterface } from './../listagem/listagem.interface';

@Component({
  selector: 'casouso-listagem',
  templateUrl: './casouso-listagem.component.html',
  styleUrls: ['./casouso-listagem.component.css']
})
export class CasousoListagemComponent implements OnInit, OnDestroy, ListagemInterface {

    private http:Http;
    private router:Router;
    //LISTAGEM
    private data:any;    
    private totalResultados:number;    
    private titulo:string;
    private colunas:object[];
    private msgSucesso:boolean = false;
    private msgFalha:boolean = false;

    static showMsgSucesso:boolean;
    static showMsgFalha:boolean;

    constructor(http:Http,router:Router) { 

        this.http = http;    
        this.router = router;

    }
    
    ngOnInit():void {

        if(CasousoListagemComponent.showMsgSucesso){
            this.showMsgSucessoTemporario();
        }

        if(CasousoListagemComponent.showMsgFalha){
            this.showMsgFalhaTemporario();
        }

        this.carregarRegistros();           
        this.titulo = "Caso de Uso";
        this.colunas =  [    
                            {"descricao":"#","ordenacao":"id"},
                            {"descricao":"Título","ordenacao":"titulo"},
                            {"descricao":"Autor","ordenacao":"autor"},
                            {"descricao":"Dt. Criação","ordenacao":"dtcriacao"},
                            {"descricao":"Dt. Alteração","ordenacao":"dtalteracao"}, 
                            {"descricao":"Status","ordenacao":"status"}
                        ];

    }

    ngOnDestroy():void {
        CasousoListagemComponent.showMsgSucesso = false;
        CasousoListagemComponent.showMsgFalha = false;
    }

    carregarRegistros():void{
        
        let json = {};
        let url = 'http://localhost:8080/angular/casosdeuso';
        let headers = new Headers();
    
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('token'));             
        
        this.http.post(url, json, { headers: headers })
    
            .subscribe((res:Response) => {

                this.data = res.json();   
                this.totalResultados = this.data.length;

            }, erro => {

                localStorage.setItem('token',null);
                this.router.navigate(['/login']);

            }
    
        );    
    
    }

    excluirRegistro(id):void{
        
        let indice:number;

        this.data.forEach((casouso, i) => {
            if(casouso.id == id){
                indice = i;
            }
        });

        this.data.splice(indice,1);

    }
    
    editarRegistro(id):void{

        this.router.navigate(['/casouso/editar'],{queryParams: {id:id}})

    }

    showMsgSucessoTemporario(){
        this.msgSucesso = true;
        setTimeout(function(){this.msgSucesso = false}.bind(this), 3000);        
    }

    showMsgFalhaTemporario(){
        this.msgFalha = true;
        setTimeout(function(){this.msgFalha = false}.bind(this), 3000);        
    }

}

