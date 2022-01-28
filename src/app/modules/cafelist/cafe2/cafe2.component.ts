import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe2',
  templateUrl: './cafe2.component.html',
  styleUrls: ['./cafe2.component.scss']
})
export class Cafe2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMap(){
    window.open('https://goo.gl/maps/5LfoLqaNpc5eSfxQ6');
  }
}
