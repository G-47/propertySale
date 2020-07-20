import { Component, OnInit } from '@angular/core';
import { AdminsService } from 'src/app/services/admins.service';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
})
export class ManagerComponent implements OnInit {
  admins = [];
  public errorMsg;

  state = 'admin';

  moveToAuction() {
    this.state = 'auction';
    console.log(this.state);
  }

  moveToActivity() {
    this.state = 'activity';
    console.log(this.state);
  }

  moveToReport() {
    this.state = 'report';
    console.log(this.state);
  }

  moveToAdmin() {
    this.state = 'admin';
    console.log(this.state);
  }

  constructor(private _adminService: AdminsService) {}

  ngOnInit(): void {
    this._adminService.getAdmins().subscribe(
      (data) => (this.admins = data),
      (error) => (this.errorMsg = error)
    );
    console.log();
  }
}
