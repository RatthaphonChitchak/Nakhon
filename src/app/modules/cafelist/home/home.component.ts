import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imgCollection: Array<object> = [
    {
      image: '../../../../assets/Photo/cofe1/cafe1.1.png',
      thumbImage: '../../../../assets/Photo/cofe1/cafe1.1.png',
    },
    {
      image: '../../../../assets/Photo/cafe2/cafe2.1.png',
      thumbImage: '../../../../assets/Photo/cafe2/cafe2.1.png',
    },
    {
      image: '../../../../assets/Photo/cafe3/cafe3.1.png',
      thumbImage: '../../../../assets/Photo/cafe3/cafe3.1.png',
    },
    {
      image: '../../../../assets/Photo/cafe4/cafe4.1.png',
      thumbImage: '../../../../assets/Photo/cafe4/cafe4.1.png',
    },
    {
      image: '../../../../assets/Photo/cafe5/cafe5.1.png',
      thumbImage: '../../../../assets/Photo/cafe5/cafe5.1.png',
    },
    {
      image: '../../../../assets/Photo/cafe6/cafe6.1.png',
      thumbImage: '../../../../assets/Photo/cafe6/cafe6.1.png',
    },
    {
      image: '../../../../assets/Photo/cafe7/cafe7.1.png',
      thumbImage: '../../../../assets/Photo/cafe7/cafe7.1.png',
    },
    {
      image: '../../../../assets/Photo/cafe8/cafe8.1.png',
      thumbImage: '../../../../assets/Photo/cafe8/cafe8.1.png',
    },
    {
      image: '../../../../assets/Photo/cafe9/cafe9.1.png',
      thumbImage: '../../../../assets/Photo/cafe9/cafe9.1.png',
    },
    {
      image: '../../../../assets/Photo/cafe10/cafe10.1.png',
      thumbImage: '../../../../assets/Photo/cafe10/cafe10.1.png',
    },

  ];

}
