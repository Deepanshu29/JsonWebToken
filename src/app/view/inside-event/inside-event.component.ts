import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inside-event',
  templateUrl: './inside-event.component.html',
  styleUrls: ['./inside-event.component.css']
})
export class InsideEventComponent implements OnInit {
  public eventID;
  public NoOfTicketAvailable = 10;
  public NoOfTicket = 1;
  public event;
  public priceForOneTicket = 100;
  
  constructor(private auth: AuthService, private router: Router, private ar: ActivatedRoute) { }

  
  ngOnInit(): void {
  let id = this.ar.snapshot.paramMap.get('id');
  console.log(id);
  this.eventID = id;

  this.auth.eventById(this.eventID).subscribe(
    res=> {
      return this.event = res;
    },
    err=> console.log(err),
  )
}

increment(){
  if(this.NoOfTicket == this.NoOfTicketAvailable){
    return this.NoOfTicket
  }else{
    return this.NoOfTicket = this.NoOfTicket + 1;
  }
}
decrement(){
  if(this.NoOfTicket == 1){
    return this.NoOfTicket
  }else{
    return this.NoOfTicket = this.NoOfTicket - 1;
  }
}
}

