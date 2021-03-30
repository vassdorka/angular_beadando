import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IsLoggedInGuard } from '../is-logged-in.guard';
import { IsLoggedInService } from '../is-logged-in.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  constructor(private router: Router, public loginService: IsLoggedInService) {}

  navigate(destination) {
    this.router.navigate([destination]);
  }

  logout() {
    this.loginService.set(false);
    this.navigate('login');
  }
}
