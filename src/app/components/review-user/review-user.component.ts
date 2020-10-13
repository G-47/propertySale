import { EmailService } from './../../services/email.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-user',
  templateUrl: './review-user.component.html',
  styleUrls: ['./review-user.component.scss'],
})
export class ReviewUserComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private emailService: EmailService
  ) {}

  userId: string;
  user: User;

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.authService.getUser(this.userId).then(
      (res) => {
        this.user = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  approveUser(): void {
    this.authService.approveOrDeleteUser(this.user._id, 1).then(
      (res) => {
        this.emailService.sendEmail(
          this.user.email,
          'Lanka Properties',
          `Hi ${this.user.firstName},\nYour user account has been accepted by lanka properties.Now you can login to the system.\n\nThis email has been sent automatically. Please do not reply this email.\n\nThank you !`
        );
        this.router.navigate(['/adminDashboard']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  declineUser(): void {
    this.authService.approveOrDeleteUser(this.user._id, -1).then(
      (res) => {
        this.emailService.sendEmail(
          this.user.email,
          'Lanka Properties',
          `Hi ${this.user.firstName},\nYour user account has been declined by lanka properties.\n\nThis email has been sent automatically. Please do not reply this email.\n\nThank you !`
        );
        this.router.navigate(['/adminDashboard']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
