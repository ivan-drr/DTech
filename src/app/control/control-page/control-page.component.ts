import { Component, OnInit } from '@angular/core';
import { MongoService } from '@app/@core/services/mongo.service';

@Component({
  selector: 'app-control-page',
  templateUrl: './control-page.component.html',
  styleUrls: ['./control-page.component.scss']
})
export class ControlPageComponent implements OnInit {

  constructor(private mongoService: MongoService) { }

  ngOnInit(): void {
  }

  changeRoomState(event: Event, name: string): void {
    console.log(event);
    this.mongoService.changeRoomState(name);
  }

}
