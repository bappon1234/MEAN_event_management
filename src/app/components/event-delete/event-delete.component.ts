import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../service/event.service';
import{Event} from '../../models/event';

@Component({
  selector: 'app-event-delete',
  standalone: true,
  imports: [],
  templateUrl: './event-delete.component.html',
  styleUrl: './event-delete.component.css'
})
export class EventDeleteComponent implements OnInit{
 event:Event | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService){ }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.eventService.getEventById(id).subscribe(event =>{
       this.event = event;
      })
    }
  }
  deleteEvent():void{
  if(this.event && this.event._id){
    this.eventService.deleteEvent(this.event._id).subscribe(()=>{
      this.router.navigate(['/event']);
    })
  }
  }

  cancel():void{
    if(this.event && this.event._id){
      this.router.navigate(['/event', this.event._id]);
    }else{
      this.router.navigate(['/event']);
    }
  }
}
