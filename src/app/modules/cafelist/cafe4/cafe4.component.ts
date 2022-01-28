import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe4',
  templateUrl: './cafe4.component.html',
  styleUrls: ['./cafe4.component.scss']
})
export class Cafe4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMap(){
    window.open('https://goo.gl/maps/WWJiFBMuYteSqRm67');
  }
}
