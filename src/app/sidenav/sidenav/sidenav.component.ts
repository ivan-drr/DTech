import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import * as Hammer from 'hammerjs';
const assets = "../../assets/";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('drawer') private drawer: MatDrawer;
  NavigationIcon = assets + "icons/navigation.png";

  showFiller = false;
  constructor() { }

  ngOnInit(): void {
    const hammer = Hammer(document.body);
    hammer.threshold = 5;

    const isOnColorPicker = event => {
      return event.target.className.includes("color-hue");
    }

    Hammer(document.body).on("panright", event => {
      if (!this.drawer.opened && !isOnColorPicker(event)) {
        this.drawer.open();
      }
    });

    Hammer(document.body).on("panleft", event => {
      if (this.drawer.opened && !isOnColorPicker(event)) {
        this.drawer.close();
      }
    });
  }

}
