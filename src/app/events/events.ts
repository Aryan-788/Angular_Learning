import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {

  username = '';
  updateUser(value: string){
    this.username = value;
  }

  showEvent(e: any){
    console.log(e);
  }
  count = signal(0);

  Increment(){
    this.count.update(v => v + 1);
  }

  Decrement(){
    this.count.update(v => v - 1);
  }
}
