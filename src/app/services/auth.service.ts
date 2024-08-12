import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/user'

  constructor(private http:HttpClient) { }
 register(user:{name:string; email:string; number:string; password:string}):Observable<any>{
  return this.http.post<any>(`${this.apiUrl}/register`, user);
 }
 login(credentials:{email:string; password:string}):Observable<any>{
  return this.http.post<any>(`${this.apiUrl}/login`, credentials);
 }

}
