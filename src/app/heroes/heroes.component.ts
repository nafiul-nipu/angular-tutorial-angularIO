import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes', //this components css-element selector like we use in react component name
  templateUrl: './heroes.component.html', //html element for this component
  styleUrls: ['./heroes.component.css'] //css
})
export class HeroesComponent implements OnInit {
  heroes : Hero[] = [];
  selectedHero?: Hero ;
  
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    // lifecycle hook
    // best place to put initialization logic
    this.getHeroes();
  }

  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  }

  getHeroes():void {
    this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
  }

}