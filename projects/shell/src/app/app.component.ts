import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shell';
  email: any = '';
  localStorageGetItem: string | null='';

  ngOnInit() {
    this.localStorageGetItem=localStorage.getItem('email')
    if(this.localStorageGetItem!==null){
      this.email=true;
    }
    else{
      this.email=false;
    }
    console.log("this.email,",localStorage.getItem('email'));
  }
  logout(){
    localStorage.clear()
  }
}
