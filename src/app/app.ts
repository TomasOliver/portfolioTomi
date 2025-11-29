import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { AboutMe } from './components/about-me/about-me';
import { Contact } from './components/contact/contact';
import { Proyects } from './components/proyects/proyects';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,Hero,AboutMe,Contact,Proyects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolioTomi');
  
}
