import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.css']
})
export class ScreeningComponent implements OnInit {

  
  isCough = false;
  isBreathing = false;
  isFever = false;
  isSymptoms = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    
  }

  
}
