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

  onKeyUp(event: any){
    console.log(event);
  }

  onBlur(event: any){
    console.log("Clicking Blur Event.");
  }
  onFocus(event: any){
    console.log(event);
    console.log("Clicking on On focus Event");
  }

  onHover(event: any){
    console.log(event);
    console.log("Clicking on On Hover Event");
  }

  onLeave(event: any){
    console.log(event);
    console.log("Clicking on On Leave Event");
  }
}
