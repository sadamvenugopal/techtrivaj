import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuestComponent } from './components/guest/guest.component';

@Component({
  selector: 'app-root',
  imports: [GuestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trivajtech';
}
