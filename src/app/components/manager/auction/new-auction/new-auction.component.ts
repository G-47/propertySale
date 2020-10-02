import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuctionService } from 'src/app/services/manager/auction.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-auction',
  templateUrl: './new-auction.component.html',
  styleUrls: ['./new-auction.component.scss'],
})
export class NewAuctionComponent implements OnInit {
  errorMessage = 'temp';
  successMessage = 'temp';
  NewAuctionForm = this.formBuilder.group({
    title: ['', Validators.required],
    startBid: ['', Validators.required],
    interval: ['', Validators.required],
    size: ['', Validators.required],
    type: ['', Validators.required],
    location: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
  });

  setImage(url): void {
    this.NewAuctionForm.controls.image.setValue(url);
    console.log('profile picture is : ' + url);
  }

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private auctionService: AuctionService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addProperty(formData) {
    this.auctionService.addProperty(formData).subscribe(
      (res) => {
        this.toastr.success('Posting a property', 'Successfully posted');
        this.router.navigate(['/manager']);
        this.NewAuctionForm.reset();
      },
      (err) => {
        this.errorMessage = err.error[0];
        console.log(err.error[0]);
      }
    );
  }
}
