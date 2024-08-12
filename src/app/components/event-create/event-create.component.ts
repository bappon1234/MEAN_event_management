import { Component } from '@angular/core';
import { EventService } from '../../service/event.service';
import { Router } from '@angular/router';
import { Event } from '../../models/event';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event-create.component.html',
  styleUrl: './event-create.component.css'
})
export class EventCreateComponent {
 event: Event = {
  tittle:'',
  description:'',
  date: new Date(),
  location: '',
  ticketsAvailable: 0
 };

 constructor(
  private eventService: EventService,
  private router: Router
 ){ }

 createEvent(): void{ 
  this.eventService.createEvent(this.event).subscribe(()=>{
    this.router.navigate(['/event']);
  });
 }
}
