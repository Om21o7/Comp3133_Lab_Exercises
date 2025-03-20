import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';  // 👈 Import it here!

@Component({
  selector: 'app-root',
  standalone: true,   // 👈 ADD THIS LINE
  imports: [HeroesComponent],  // 👈 Use imports instead of declarations
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';
}
