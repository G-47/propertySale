import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ActivitylogService } from 'src/app/services/manager/activitylog.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-activity-logs',
  templateUrl: './activity-logs.component.html',
  styleUrls: ['./activity-logs.component.scss'],
})
export class ActivityLogsComponent implements OnInit {

  filename = 'report.xlsx'
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

  exportexcel():void{
    let element = document.getElementById('htmlData');
    const ws : XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb : XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'Sheet1');

    XLSX.writeFile(wb,this.filename);
  }
}

