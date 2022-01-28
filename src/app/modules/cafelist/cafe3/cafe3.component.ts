import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe3',
  templateUrl: './cafe3.component.html',
  styleUrls: ['./cafe3.component.scss']
})
export class Cafe3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMap(){
    window.open('https://goo.gl/maps/WWJiFBMuYteSqRm67');
  }
}
