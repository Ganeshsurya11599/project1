import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   username:string;
   password:string;
  constructor( private router:Router ) { }

  ngOnInit() {

  }
  onSubmit(){
  if(this.username=='Admin' && this.password=='Password'){
    alert('Welcome');
    this.router.navigate(['admin']);
  }
  else if(this.username=='Superadmin' && this.password=='1234567890'){
    alert('Welcome');
    this.router.navigate(['superadmin']);
  }
  else if(this.username=='Users' && this.password=='Users123'){
    alert('Welcome');
    this.router.navigate(['page1']);
  }
  else{
    alert('Invalid');
  }
}
}

