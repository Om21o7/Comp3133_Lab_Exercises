import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this!
import { FormsModule } from '@angular/forms'; // ✅ Import for ngModel

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Add them here
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero: any; // Accept hero from parent component
}
