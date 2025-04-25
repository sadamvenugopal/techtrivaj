import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  title = 'Our Team';
  description = 'Meet the talented professionals behind our success. Our team brings together diverse expertise to deliver exceptional results for our clients.';
}