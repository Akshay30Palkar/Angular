import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { makeStateKey } from '@angular/platform-browser';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //use httpclient as a private variable & import it
  constructor(private _http: HttpClient) { }
  //crating postRestaurant method with post & import rxjx for map function
  postRestaurant(data: any) {
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res: any) => { return res; }))
  }
  //get restaurant method using get method
  getRestaurant() {
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res: any) => { return res; }))
  }
  //update Restaurant using put method
  updateRestaurant(data:any,id:number){
    return this._http.put<any>("http://localhost:3000/posts",id+data).pipe(map((res: any) => { return res; }))

  }
  //Delete Restaurant using Delete Method
  deleteRestaurant(data:any,id:number){
    return this._http.delete<any>("http://localhost:3000/posts"+id).pipe(map((res:any)=>{return res}))
  }
}
