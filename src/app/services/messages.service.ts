import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
  messageList: string[];

  constructor() {
    this.messageList = ["Hi! I'm Néstor", 'How are you?'];
  }

  getMessageList() {
    return this.messageList;
  }

  pushNewMessage(message: string) {
    this.messageList.push(message);
  }
}
