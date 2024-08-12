import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Event } from '../models/event';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:5000/api/events/'

  constructor(private http: HttpClient) { }

  getEvents():Observable<Event[]>{
     return this.http.get<Event[]>(this.apiUrl);
  }

  getEventById(id: string): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/${id}`);
  }

  createEvent(event: Event): Observable<Event>{
    return this.http.post<Event>(this.apiUrl, event);
  }

  updateEvent(id: string, event:Event): Observable<Event>{
    return this.http.put<Event>(`${this.apiUrl}${id}`, event);
  }

  deleteEvent(id:string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  addFeedback(id:string, feedback: {user:string; comment: string }): Observable<Event>{
    return this.http.post<Event>(`${this.apiUrl}/${id}/feedback`, feedback);
  }
}
