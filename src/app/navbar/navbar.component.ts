import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  clickCounter = 10;
  countClick() {
    this.clickCounter += 10;
    console.log(this.clickCounter);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
