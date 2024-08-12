import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EventService } from '../../service/event.service';
import { Event} from '../../models/event';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventFeedbackComponent } from "../event-feedback/event-feedback.component";

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [FormsModule, CommonModule, EventFeedbackComponent,RouterModule],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css'
})
export class EventDetailComponent implements OnInit{
 event: Event | undefined;
  constructor(private route:ActivatedRoute, private eventService:EventService){ }
  
  ngOnInit():void{
    this.loadEvent();
  }
  loadEvent(): void { 
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.eventService.getEventById(id).subscribe((data: Event)=>{
        this.event = data;
      });
    }
  }

  onFeedbackSubmitted():void{
    this.loadEvent();
  }
}
