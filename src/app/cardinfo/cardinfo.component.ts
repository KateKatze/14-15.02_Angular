import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cardinfo',
  templateUrl: './cardinfo.component.html',
  styleUrls: ['./cardinfo.component.css']
})
export class CardinfoComponent implements OnInit {

  cars = [
    {manufacturer: "Ford",
    img: "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930__480.jpg",
    text: "lorem",
    year: 2018
    }, {manufacturer: "Tesla",
    img: "https://cdn.pixabay.com/photo/2021/01/21/11/09/tesla-5937063__340.jpg",
    text: "lorem",
    year: 2020
    }, {manufacturer: "Seat",
    img: "https://cdn.pixabay.com/photo/2017/08/12/12/00/seat-leon-2634185__340.jpg",
    text: "lorem",
    year: 2017
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
