import { Component, OnInit, Input } from '@angular/core';
import { AdminsService } from 'src/app/services/admins.service';
import { EmailService } from 'src/app/services/email.service';
import { Admin } from 'src/app/models/admin.model';
import { Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss'],
})
export class AdminsComponent implements OnInit {
  public admins = [];
  public errorMsg;
  data: any;
  errorMessage = 'temp';
  successMessage = 'temp';
  admin: User[];

  ComposeMsg = this.formBuilder.group({
    name: ['', [Validators.required]],
    message: ['', Validators.required],
  });

  removeableAdmin: User = {} as User;

  setRemoveItem(item) {
    this.removeableAdmin = item;
  }

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private adminService: AdminsService,
    private emailService: EmailService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminService.getAdmins().subscribe(
      (result) => {
        console.log(result);
        this.data = result;
      },
      (error) => (this.errorMsg = error)
    );
  }

  composeMsg(formData) {
    this.adminService
      .composeMsg(
        { ...this.removeableAdmin, message: formData.message },
        this.removeableAdmin._id
      )
      .subscribe(
        (res) => {
          this.toastr.success('Sendding a message', 'Message sent succesfully');
          this.router.navigate(['/manager']);
        },
        (err) => {
          this.errorMessage = err.error[0];
          console.log(err.error[0]);
        }
      );
  }

  removeAdmin(removeableAdmin): void {
    this.adminService.removeadmin(removeableAdmin._id).subscribe((res) => {
      console.log('success');
    });
  }


}
