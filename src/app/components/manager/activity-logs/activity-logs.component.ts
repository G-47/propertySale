import { Component, OnInit } from '@angular/core';
import { ActivitylogService } from 'src/app/services/manager/activitylog.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-logs',
  templateUrl: './activity-logs.component.html',
  styleUrls: ['./activity-logs.component.scss'],
})
export class ActivityLogsComponent implements OnInit {
  public activity = [];
  public errorMsg;
  data: any;
  errorMessage = 'temp';
  successMessage = 'temp';

  constructor(
    private http: HttpClient,
    private router: Router,
    private activityservice: ActivitylogService
  ) {}

  ngOnInit(): void {
    this.activityservice.getActivities().subscribe(
      (result) => {
        console.log(result);
        this.data = result;
      },
      (error) => (this.errorMsg = error)
    );
  }
}
