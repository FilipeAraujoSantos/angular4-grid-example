import { CasousoListagemComponent } from './casouso-listagem.component';
import { Component, OnInit, Input } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'casouso-editar',
  templateUrl: './casouso-editar.component.html',
  styleUrls: ['./casouso-editar.component.css']
})
export class CasousoEditarComponent implements OnInit {

  private http:Http;
  private route:ActivatedRoute;
  private router:Router;
  private id:number;
  private data:any;

  //EDIÇÃO
  private titulo:string;
  private autor:string;
  private dtcriacao:string;
  private dtalteracao:string;
  private status:string;

  constructor(http:Http, route:ActivatedRoute, router:Router) { 

    this.http = http;
    this.route = route;
    this.router = router;

  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.id = +params['id'];
    });

    this.carregaDadosById();

  }

  carregaDadosById(){

    let json = {id:this.id};
    let url = 'http://localhost:8080/angular/casouso/carregar';
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem('token'));     
    
    this.http.post(url, json, { headers: headers })

        .subscribe((res:Response) => {

            this.data = res.json();   
            localStorage.setItem('token',this.data.token);    
            this.popularValoresInput()

        }, erro => {

            localStorage.setItem('token',null);
            this.router.navigate(['/login']);

        }

    );       

  }

  retornar(event){

    event.preventDefault();
    this.router.navigate(['casouso/listagem']);

  }

  salvar(event){

    event.preventDefault();    

    this.enviarDadosBySave();

  }

  popularValoresInput(){

    this.titulo = this.data.titulo; 
    this.autor = this.data.autor;
    this.dtcriacao = this.data.dtcriacao;
    this.dtalteracao = this.data.dtalteracao;
    this.status = this.data.status;

  }


  enviarDadosBySave(){

    let url = 'http://localhost:8080/angular/casouso/salvar';
    
    let json = {
                id: this.id,
                titulo: this.titulo,
                autor: this.autor,
                dtcriacao: this.dtcriacao,
                dtalteracao: this.dtalteracao,
                status: this.status
               };

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem('token'));     
    
    this.http.post(url, json, { headers: headers })

        .subscribe((res:Response) => {

            localStorage.setItem('token',this.data.token);  
            CasousoListagemComponent.showMsgSucesso = true;  
            this.router.navigate(['/casouso/listagem']);            

        }, erro => {

            localStorage.setItem('token',null);
            CasousoListagemComponent.showMsgFalha = true;  
            this.router.navigate(['/login']);

        }

    );   

  }

}
