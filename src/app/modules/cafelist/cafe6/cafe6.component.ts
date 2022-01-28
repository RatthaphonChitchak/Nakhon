import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe6',
  templateUrl: './cafe6.component.html',
  styleUrls: ['./cafe6.component.scss']
})
export class Cafe6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMap(){
    window.open('https://goo.gl/maps/WWJiFBMuYteSqRm67');
  }
}
