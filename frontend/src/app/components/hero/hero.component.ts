import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  imagenes: string[] = [
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero3.jpg'
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

