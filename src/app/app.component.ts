import { Component } from '@angular/core';
import NET from 'vanta/dist/vanta.net.min';
import { Router } from '@angular/router';
const assets = '../assets/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Logo = assets + 'icons/Logo.png';
  title = 'DTech';
  effect: any;

  ngOnInit() {
    this.effect = NET({
      el: "#net-background",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x7487a2,
      backgroundColor: 0xe3e3e3,
      points: 7.00,
      maxDistance: 17.00,
      spacing: 14.00
    })
  }

  constructor(private router: Router) {
    this.router.navigate(['login']);
  }
}