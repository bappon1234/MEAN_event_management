import { Component, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';
import { Event } from '../../models/event'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent implements OnInit{
 events: Event[]=[];
  constructor(private eventService: EventService){}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events=>{
      this.events = events;
    });
  }
}
