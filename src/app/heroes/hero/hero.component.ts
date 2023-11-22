import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'iron-man';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} is ${this.age} years old`;
  }

  changeHero(): void {
    this.name = 'Thor';
  }

  changeAge(): void {
    this.age = 150;
  }

  reset(): void {
    this.name = 'Iron-man';
    this.age = 45;
  }
}
