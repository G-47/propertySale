import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  Input,
} from '@angular/core';
import { PanoViewer } from '@egjs/view360';

@Component({
  selector: 'app-three-sixty-image',
  templateUrl: './three-sixty-image.component.html',
  styleUrls: ['./three-sixty-image.component.scss'],
})
export class ThreeSixtyImageComponent implements OnInit, AfterViewInit {
  @ViewChild('360viewer', { static: false }) viewer;

  @Input() type: string;

  private panoViewer: PanoViewer;

  constructor() {}

  ngAfterViewInit(): void {
    if (this.type === 'land') {
      this.panoViewer = new PanoViewer(this.viewer.nativeElement, {
        image: `/assets/images/lands-360/${Date.now() % 3}.jpeg`,
      });
    } else if (this.type === 'house') {
      this.panoViewer = new PanoViewer(this.viewer.nativeElement, {
        image: `/assets/images/houses-360/${Date.now() % 3}.jpeg`,
      });
    }
  }

  ngOnInit(): void {}
}
