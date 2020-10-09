import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() profilePicture: string;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() email: string;

  constructor() {}

  ngOnInit(): void {}
}
