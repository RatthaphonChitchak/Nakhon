import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe5',
  templateUrl: './cafe5.component.html',
  styleUrls: ['./cafe5.component.scss']
})
export class Cafe5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMap(){
    window.open('https://goo.gl/maps/WWJiFBMuYteSqRm67');
  }
}
