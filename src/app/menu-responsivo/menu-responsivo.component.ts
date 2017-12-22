import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-responsivo',
  templateUrl: './menu-responsivo.component.html',
  styleUrls: ['./menu-responsivo.component.css']
})
export class MenuResponsivoComponent implements OnInit {

  /** 
   * 
   * @author Thomas Rundle
   * @see https://medium.com/@ct7/the-simple-way-to-make-a-mobile-angular-2-bootstrap-navbar-without-jquery-d6b3f67b037b
   * 
   **/

  private isIn:boolean = false;

  constructor() { 
    
  }

  ngOnInit() {

  }
  
  toggleState() {

      let bool = this.isIn;
      this.isIn = bool === false ? true : false; 

  }

}
