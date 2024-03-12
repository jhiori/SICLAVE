import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './main/header/header.component';
import { EntidadesFederativasComponent } from './content/entidades-federativas/entidades-federativas.component';
import { HttpClientModule } from '@angular/common/http'
import { provideHttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, EntidadesFederativasComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',

})
export class AppComponent {
  title = 'SICLAVE';
}
