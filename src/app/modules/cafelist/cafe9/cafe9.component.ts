import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe9',
  templateUrl: './cafe9.component.html',
  styleUrls: ['./cafe9.component.scss']
})
export class Cafe9Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMap(){
    window.open('https://goo.gl/maps/Xqqc3k34ZEraPjqS6');
  }
}
