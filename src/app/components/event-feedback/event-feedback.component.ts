import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EventService } from '../../service/event.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-feedback',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './event-feedback.component.html',
  styleUrl: './event-feedback.component.css'
})
export class EventFeedbackComponent {
@Input() eventId:string|undefined;
@Output() feedbackSubmitted = new EventEmitter<void>();

user: string = '';
comment:string= '';

constructor(private eventService: EventService){ }

submitFeedback():void {
  if(this.eventId){
    this.eventService.addFeedback(this.eventId, {user: this.user, comment: this.comment })
    .subscribe(()=>{
      this.user = '';
      this.comment = '';
      this.feedbackSubmitted.emit();
      console.log("feedback submitted");
    });
  }
}
}
