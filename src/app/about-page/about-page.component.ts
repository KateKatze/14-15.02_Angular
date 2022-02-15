import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})

export class AboutPageComponent implements OnInit {

  name = new FormControl();

  info = new FormGroup({
    model: new FormControl('', [Validators.required, Validators.min(2)]),
    rent: new FormControl('', [Validators.required, Validators.min(1)]),
    fname: new FormControl('', [Validators.required, Validators.min(3)]),
    lname: new FormControl('', [Validators.required, Validators.min(3)]),
    number: new FormControl('', [Validators.required, Validators.min(5)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.info.valid){
      var a = this.info.value;
      (document.getElementById("answers") as HTMLElement).innerHTML = a;
    } else {
      (document.getElementById("answers") as HTMLElement).innerHTML = ('Form is not valid');
    }
  }
}
