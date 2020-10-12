import { ReportService } from './../../services/report.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  kirama = { lat: 6.207518008065241, lng: 80.66704548390341 };

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.reportService.getReport('priyashan jayasankha').then(
      (res) => {
        console.log(res);
        this.downLoadFile(res, 'application/pdf');
      },
      (err) => {
        this.downLoadFile(err.text, 'application/pdf');
        console.log(err);
      }
    );
  }

  downLoadFile(data: any, type: string): void {
    let blob = new Blob([data], { type });
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert('Please disable your Pop-up blocker and try again.');
    }
  }
}
