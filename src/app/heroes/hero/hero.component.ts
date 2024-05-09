import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironMan';
  public age: number = 45;

  public anotherName: string = 'Deku';
  public anotherAge: number = 16;

  get capitalizedName():string{ //capitalizando???
    return this.name.toUpperCase();
  }


  changeHero(): void{
    this.name = this.anotherName;
  }

  changeAGe(): void{
    this.age = this.anotherAge;

  }
  getHeroDescription():string {
    return `${ this.name} - ${ this.age}`;

  }

  resetAll(): void{
    this.name = 'ironMan';
    this.age = 45;
  }


}
