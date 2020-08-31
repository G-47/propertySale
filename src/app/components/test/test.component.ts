import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  public threeSixtyImages: string[] = ['https://picsum.photos/500/500'];

  constructor() {}

  ngOnInit(): void {}

  printLink(url): void {
    console.log('paaya' + url);
  }
}
