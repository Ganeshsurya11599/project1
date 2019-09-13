import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { resolve } from 'q';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  getData1:any;
  constructor( private httpClient:HttpClient ) { }

  postData(value){
    return this.httpClient.post('https://5d7894c7a8c27100149861b8.mockapi.io/users',value).toPromise()
    .then((data)=>{
      resolve(data)
    })
   }
   getData(){
     return this.httpClient.get('https://5d7894c7a8c27100149861b8.mockapi.io/users')
     .pipe(map(data=>this.getData1=data))
   }
   del(value){
     return this.httpClient.delete('https://5d7894c7a8c27100149861b8.mockapi.io/users/'+value)
     .pipe(map(data=>this.getData1=data))
   }
}
