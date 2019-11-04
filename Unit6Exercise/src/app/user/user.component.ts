import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User= new User();
  username:string;
  constructor(routes:ActivatedRoute) {
    routes.params.subscribe((params)=>{
      console.log(params);
      // this.username= params['name'];
      this.user.userName = params['name']
      console.log(this.user.userName);
    });
   }

  ngOnInit() {
  }
}
class User{
  userName:string;
}