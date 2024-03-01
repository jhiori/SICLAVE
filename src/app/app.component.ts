import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './main/header/header.component';
import { EntidadesFederativasComponent } from './content/entidades-federativas/entidades-federativas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, EntidadesFederativasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  
})
export class AppComponent {
  title = 'SICLAVE';
}
