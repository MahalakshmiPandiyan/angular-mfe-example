import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shell';
  email: any = '';

  ngOnInit() {
    // this.email = localStorage.getItem('email')
    if(localStorage.getItem('email')!==null){
      this.email=true;
    }
    else{
      this.email=false;
    }
    console.log("this.email,",localStorage.getItem('email'));
    console.log("this.email,",this.email);
  }
  logout(){
    localStorage.clear();
    window.location.reload();
  }
}
