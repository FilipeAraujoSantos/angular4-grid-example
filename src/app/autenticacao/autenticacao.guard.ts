import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';

import { Subscription } from "rxjs/Subscription";
import { Observable } from 'rxjs/Rx';


@Injectable()
export class AutenticacaoGuard implements CanActivate, CanLoad {

    http:Http;
    router:Router;
    http_status:number = 200;

    constructor(router:Router,http:Http){ 
        this.http = http;
        this.router = router;
    }

    canActivate (route:ActivatedRouteSnapshot,state:RouterStateSnapshot) : Observable<boolean> | boolean {
        return this.verificarToken();
    }

    canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
        return this.verificarToken();
    }

    createAuthorizationHeader(headers:Headers) {
        headers.append('Content-Type', 'application/json');        
        headers.append('Authorization', localStorage.getItem('token')); 
    }

    verificarToken(){

        let url = 'http://localhost:8080/angular/validarToken';    
        let json = {'email':'','password':''};
        let headers = new Headers();     

        this.createAuthorizationHeader(headers);        
            
        return this.http.post(url, json, { headers: headers }).map((res:Response) => {            
                
            if(res.status == this.http_status){

                let login = res.json();                
                localStorage.setItem('token',login.token);
                return true;

            }else{

                localStorage.setItem('token',null);
                this.router.navigate(['/login'])    
                return false;

            }

        }).catch((err: any) => {

            localStorage.setItem('token',null);
            this.router.navigate(['/login'])
            return Observable.of(false);
            
        });
    }

}