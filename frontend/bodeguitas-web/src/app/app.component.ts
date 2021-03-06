import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bodeguitas-web';
  constructor(
    public authService: AuthService,
    private router: Router
  ) { }
  showAuthor() {
    alert("Brayan :)")
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
