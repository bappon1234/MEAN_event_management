import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../service/event.service';
import { Event } from '../../models/event';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './event-edit.component.html',
  styleUrl: './event-edit.component.css'
})
export class EventEditComponent implements OnInit{
  event: Event | undefined;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private router: Router
  ){}

  ngOnInit():void{
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.eventService.getEventById(id).subscribe((data: Event)=>{
        this.event = data;
      });
    }
  }

  updateEvent(): void{
    if(this.event && this.event._id){
      this.eventService.updateEvent(this.event._id, this.event).subscribe(()=>{
        this.router.navigate(['/event']);
      });
    }
  }

}
