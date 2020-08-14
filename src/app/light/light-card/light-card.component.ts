import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-light-card',
  templateUrl: './light-card.component.html',
  styleUrls: ['./light-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LightCardComponent implements OnInit {

  hex = '#255255';
  light_intensity = 100;
  savedColors = ['#D0021B', '#F5A623', '#F8E71C', '#8B572A'];

  constructor() { }

  ngOnInit(): void {
  }

  changeColor = event => {
    this.light_intensity = event.color.rgb.a * 100;
    this.hex = event.color.hex;
  }

  addColor = () => {
    this.savedColors = [...this.savedColors, this.hex];
  }

}
