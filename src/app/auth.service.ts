import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  Register(user){
    return this.http.post<any>('api/register',user);
  }

  Login(user){
    return this.http.post<any>('api/login',user);
  }

  event(){
    return this.http.get<any>('api/events');
  }

  eventById(id){
    return this.http.get<any>(`api/events/${id}`)
  }

  addEvent(event){
    return this.http.post<any>('api/events', event);
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  eventDelete(id){
    return this.http.delete(`api/events/${id}`)
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
