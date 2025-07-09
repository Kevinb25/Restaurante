import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  imagenes = [
    {
      src: '/images/hero2.jpg',
      texto: 'Mas que un Restaurante',
      linkHref: '',
      linkText: 'Conocenos'
    },
    {
      src: '/images/hero1.jpg',
      texto: 'Sabor Venezolano',
      linkHref: '',
      linkText: 'Menu'
    },
    {
      src: '/images/hero3.jpg',
      texto: 'llegamos hasta tu hogar',
      linkHref: '',
      linkText: 'Ordenar ya'
    }
  ];

  indiceActual = 0;
  intervalo: any;

  ngOnInit(): void {
    this.intervalo = setInterval(() => {
      this.indiceActual = (this.indiceActual + 1) % this.imagenes.length;
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }
}

