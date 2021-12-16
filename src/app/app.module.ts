import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { NewMessageComponent } from './components/new-message/new-message.component';

import { MessagesService } from './services/messages.service';

@NgModule({
  declarations: [AppComponent, MessageListComponent, NewMessageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [MessagesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
