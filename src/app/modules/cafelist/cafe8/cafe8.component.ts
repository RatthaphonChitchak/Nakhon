import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe8',
  templateUrl: './cafe8.component.html',
  styleUrls: ['./cafe8.component.scss']
})
export class Cafe8Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMap(){
    window.open('https://goo.gl/maps/WWJiFBMuYteSqRm67');
  }
}
