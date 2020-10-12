import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent implements OnInit {
  status = false;
  element = document.getElementById('chatBox');

  constructor() {}

  ngOnInit(): void {
    this.element.style.display = 'none';
  }

  toggle(): void {
    this.status = !this.status;
  }
}
