import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe7',
  templateUrl: './cafe7.component.html',
  styleUrls: ['./cafe7.component.scss']
})
export class Cafe7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMap(){
    window.open('https://goo.gl/maps/WWJiFBMuYteSqRm67');
  }
}
