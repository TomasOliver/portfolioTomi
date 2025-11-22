import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from "./components/navbar/hero/hero";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolioTomi');
  
}
