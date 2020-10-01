import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-oction',
  templateUrl: './oction.component.html',
  styleUrls: ['./oction.component.scss']
})
export class OctionComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,) {}

  kirama = {lat: 6.2074, lng: 80.6672};

  ngOnInit(): void {}

  scroll(el: HTMLElement): void {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  BiddingForm = this.formBuilder.group({
    biddingAmount: [null, this.bidValueValidator ],
  });

  bidValueValidator(control: AbstractControl):{[key: string]: boolean} | null {

    if( control.value !==null && (isNaN(control.value) || control.value < 20)){
      return {'bidValueValidator': true}
    }
    return null;
  };
}
