import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name = '';
  ngOnInit(){

  }
  constructor(private router: Router){

  }
  navigateTo(to:string){
    this.router.navigate([to,this.name]);
  }

}
