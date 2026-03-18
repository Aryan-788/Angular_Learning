import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tutorial');
  Name = "Aryan Narayan";
  Age = 23;
  Stream = "CSE";
  Tech_Stack = ".NET Full Stack";
  isAdmin = true;

  count = signal(0);

  Increment(){
    return this.count.update(value => value + 1);
  }
  Decrement(){
    return this.count.update(value => value - 1);
  }
}
