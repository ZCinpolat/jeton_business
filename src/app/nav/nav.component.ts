import { Component, OnInit } from '@angular/core';
import { Menu } from '../models/menu';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  menuList : Array<Menu> =  new Array<Menu>();

  constructor() { 
    this.SetMenu();
  }

  ngOnInit(): void {
  }


  SetMenu(){
    let menu = {} as Menu;  
    menu.Id =1 ;
    menu.Name ="BUSINESS"
    this.menuList.push( menu);

    menu = new Menu();
    menu.Id =2 ;
    menu.Name ="CARD"
    this.menuList.push( menu);
    
    menu = new Menu();
    menu.Id =3 ;
    menu.Name ="SECURITY"
    this.menuList.push( menu);
    
    menu = new Menu();
    menu.Id =4 ;
    menu.Name ="SIGN UP"
    this.menuList.push( menu);

    menu = new Menu();
    menu.Id =5 ;
    menu.Name ="SIGN IN"
    this.menuList.push( menu);

    
    
  }

}
