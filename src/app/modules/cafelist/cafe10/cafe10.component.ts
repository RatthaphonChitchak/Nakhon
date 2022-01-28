import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe10',
  templateUrl: './cafe10.component.html',
  styleUrls: ['./cafe10.component.scss']
})
export class Cafe10Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMap(){
    window.open('https://goo.gl/maps/WWJiFBMuYteSqRm67');
  }
}
