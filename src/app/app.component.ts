import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LoginBoxComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, LoginBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'admin-panel';
}
