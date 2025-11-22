import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  isOpen = signal(false);
  
  menuItems = [
    { label: 'Inicio', link: '#' },
    { label: 'Proyectos', link: '#proyectos' },
    { label: 'Sobre Mí', link: '#sobre-mi' },
    { label: 'Contacto', link: '#contacto' }
  ];

  toggleMenu() {
    this.isOpen.update(value => !value);
  }
}
