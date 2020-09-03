import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PanoViewer} from '@egjs/view360';

@Component({
  selector: 'app-three-sixty-image',
  templateUrl: './three-sixty-image.component.html',
  styleUrls: ['./three-sixty-image.component.scss']
})
export class ThreeSixtyImageComponent implements OnInit, AfterViewInit {

  @ViewChild('360viewer', {static: false}) viewer;

  private panoViewer: PanoViewer;

  constructor() {}

  ngAfterViewInit(): void {
    this.panoViewer = new PanoViewer(
      this.viewer.nativeElement,
      {
        image: '/assets/images/360.jpeg'
      }
    );
  }

  ngOnInit(): void {
  }

}
