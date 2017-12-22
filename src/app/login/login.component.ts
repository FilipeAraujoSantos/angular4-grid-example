import { Component, Input } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']    
})
export class LoginComponent{

    email:string;
    password:string;
    http:Http;
    meuForm: FormGroup;
    router:Router;

    constructor(http:Http, fb:FormBuilder, router:Router){

        this.http = http;        
        
        this.meuForm = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.router = router;

    }

    createAuthorizationHeader(headers:Headers) {
        headers.append('Content-Type', 'application/json');        
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('token')); 
        headers.append('usuario', this.email);
    }

    validarLogin(event){

        event.preventDefault();    

        // cria uma instância de Headers
        let json = {"email":this.email, "password":this.password};
        let url = 'http://localhost:8080/angular/';    
        let headers = new Headers();

        this.createAuthorizationHeader(headers);
        
        this.http.post(url, json, { headers: headers })

            .subscribe((res:Response) => {

                let login = res.json();                
                localStorage.setItem('token',login.token);
                this.router.navigate(['/home']);

            }, erro => {

                localStorage.setItem('token',null);
                this.router.navigate(['/login'])
                
            }
        );
    }

}