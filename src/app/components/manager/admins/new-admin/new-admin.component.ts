import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AdminsService } from 'src/app/services/admins.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.scss'],
})
export class NewAdminComponent implements OnInit {
  errorMessage = 'temp';
  successMessage = 'temp';
  AddAdmin = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private adminService: AdminsService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  addData(formData) {
    this.adminService.addAdmin(formData).subscribe(
      (res) => {
        this.toastr.success('Addign an admin', 'Addes successfully');
        this.router.navigate(['/manager']);
        this.AddAdmin.reset();
      },
      (err) => {
        this.errorMessage = err.error[0];
        console.log(err.error[0]);
      }
      );
    }
    
  ngOnInit(): void {}
}
