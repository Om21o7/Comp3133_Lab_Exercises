import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveSpacesPipe } from '../remove-spaces.pipe'; // Import the Pipe

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, RemoveSpacesPipe], // Add the Pipe here
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
}
