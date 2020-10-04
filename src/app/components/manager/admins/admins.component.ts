import { Component, OnInit, Input } from '@angular/core';
import { AdminsService } from 'src/app/services/admins.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss'],
})
export class AdminsComponent implements OnInit {
  public admins = [];
  public errorMsg;
  data: any;

  hello(){

  }

  constructor(private _adminService: AdminsService) {}

  ngOnInit(): void {
    this._adminService.getAdmins().subscribe(
      (result) => {
        console.log(result);
        this.data = result;
      },
      (error) => (this.errorMsg = error)
    );
  }
}
