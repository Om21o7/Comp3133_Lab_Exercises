import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveSpacesPipe } from '../remove-spaces.pipe';
import { InputFormatDirective } from '../input-format.directive';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'; // Import the new component

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, RemoveSpacesPipe, InputFormatDirective, HeroDetailComponent], // Register HeroDetailComponent
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = [
    { id: 1, name: 'Super-man' },
    { id: 2, name: 'Bat-man' },
    { id: 3, name: 'Iron-Man' },
    { id: 4, name: 'Hulk' }
  ];

  selectedHero: any = null;

  selectHero(hero: any) {
    this.selectedHero = hero;
  }
}
