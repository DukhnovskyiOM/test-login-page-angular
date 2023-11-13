import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  codeForm!: FormGroup;
  isActive = false;

  constructor(private router: Router, private authService: AuthService) {}

  submitLogin() {
    this.authService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate(['user']),
      error: (err) => alert(err.message),
    });
  }

  submitLog() {
    this.isActive = true;
    console.log(this.loginForm.value.email);
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9\d]{6,}$/),
      ]),
      password2: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9\d]{6,}$/),
      ]),
    });
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['user']);
    }
    this.codeForm = new FormGroup({
      code: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9\d]{6,}$/),
      ]),
    });
  }
}
