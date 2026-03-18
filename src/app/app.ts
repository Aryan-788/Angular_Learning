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
}
