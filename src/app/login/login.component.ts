import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IsLoggedInService } from '../is-logged-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(
    private router: Router,
    private snack: MatSnackBar,
    private loginService: IsLoggedInService
  ) {}

  ngOnInit(): void {}
  dummyUser = {
    username: 'carlos99',
    password: 'Milagros',
  };

  submit(form) {
    if (
      this.dummyUser.username === form.form.value.username &&
      this.dummyUser.password === form.form.value.password
    ) {
      this.loginService.set(true);
      this.router.navigate(['list']);
    } else {
      form.resetForm();
      this.snack.open('Username or password is incorrect!', null, {
        duration: 2000,
      });
    }
  }
}
