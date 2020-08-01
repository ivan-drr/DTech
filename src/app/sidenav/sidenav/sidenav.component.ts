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

  sidenavHide = true;
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
    Hammer(document.body).on("panright", () => {
      if (this.sidenavHide) {
        this.drawer.toggle();
        this.sidenavHide = !this.sidenavHide;
      }
    });

    Hammer(document.body).on("panleft", () => {
      if (!this.sidenavHide) {
        this.drawer.toggle();
        this.sidenavHide = !this.sidenavHide;
      }
    });
  }

}
