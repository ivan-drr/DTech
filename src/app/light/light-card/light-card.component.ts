import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MongoService } from '@app/@core/services/mongo.service';

import { EventMqttService } from '@app/@core/services/event-mqtt.service';
import { IMqttMessage } from "ngx-mqtt";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-light-card',
  templateUrl: './light-card.component.html',
  styleUrls: ['./light-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LightCardComponent implements OnInit {

  events: any[];
  subscription: Subscription;

  hex = '#255255';
  light_intensity = 100;
  savedColors = ['#D0021B', '#F5A623', '#F8E71C', '#8B572A'];

  constructor(
    private readonly eventMqtt: EventMqttService,
    private mongoService: MongoService) { }

  ngOnInit() {
    this.subscribeToTopic("home/room_01/light_01/#");
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  toggleLight(event) {
    this.events.push("home/room_01/light_01/OnOff", "toggle");
    //this.mqttService.mqttPublish("home/room_01/light_01/OnOff", "toggle");
    this.mongoService.changeRoomState("light_01");
  }

  private subscribeToTopic(topicName: string) {
    this.subscription = this.eventMqtt.topic(topicName)
      .subscribe((data: IMqttMessage) => {
        let item = JSON.parse(data.payload.toString());
        this.events.push(item);
      });
  }

  changeColor(event: any) {
    console.log(typeof event);
    
    this.light_intensity = event.color.rgb.a * 100;
    this.hex = event.color.hex;
  }

  addColor() {
    this.savedColors = [...this.savedColors, this.hex];
  }

}
