import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sbr-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messageIcon = faEnvelope;
  messages: Message[] = [
    {
      sender: 'Emily Fowler',
      time: '58m',
      text: 'Hi there! I am wondering if you can help me with a problem I\'ve been having.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Message {
  sender: string;
  time: string;
  text: string;
}
