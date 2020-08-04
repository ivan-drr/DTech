import { Component, OnInit } from '@angular/core';
import { MongoService } from '@app/@core/services/mongo.service';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.scss']
})
export class RoomPageComponent implements OnInit {

  constructor(private mongoService: MongoService) { }

  ngOnInit(): void {
  }

  changeRoomState(event: Event, name: string): void {
    console.log(event);
    this.mongoService.changeRoomState(name);
  }

}
