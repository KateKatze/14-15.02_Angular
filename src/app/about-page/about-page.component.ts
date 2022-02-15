import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})

export class AboutPageComponent implements OnInit {

  cararr: Array<{fname: string, lname: string, mnumber: number, email: string, msg: string}> = [];
  
  name = new FormControl();
  valid = false;

  info = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.min(2)]),
    lname: new FormControl('', [Validators.required, Validators.min(1)]),
    mnumber: new FormControl('', [Validators.required, Validators.min(3)]),
    email: new FormControl('', [Validators.required, Validators.min(3)]),
    msg: new FormControl('', [Validators.required, Validators.min(5)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.info.valid) {
      console.log("is valid");
      this.valid= true;
    }
    console.log(this.info.valid);
    console.log(this.info.value.email)

  }
}
