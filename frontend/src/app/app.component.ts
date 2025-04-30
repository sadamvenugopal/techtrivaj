import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { GuestComponent } from './components/guest/guest.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trivajtech';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Remove scroll lock class (e.g., from mobile nav or modal)
        document.body.classList.remove('no-scroll');
        // Scroll to top
        window.scrollTo(0, 0);
      });
  }
}
