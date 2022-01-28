import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe1',
  templateUrl: './cafe1.component.html',
  styleUrls: ['./cafe1.component.scss']
})
export class Cafe1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMap(){
    window.open('https://goo.gl/maps/WWJiFBMuYteSqRm67');
  }
}
