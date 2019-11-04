import { Component } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unit6Lesson1';
  textToPass = '';
  constructor(private router:Router){}

  // navigateTo(to:string){
  //   this.router.navigateByUrl(to);
  //   // we use this for child routes
  //   // this.router.navigate(['/','first']);
  // }
  navigateTo(to:string){
    this.router.navigate([to,this.textToPass])
  }
}
