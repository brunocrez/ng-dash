import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  submitted = false
  incorrectField = false
  dismissible = true

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  ngOnInit() { }

  get f() { return this.loginForm.controls }

  login() {
    this.submitted = true

    if (this.loginForm.invalid) {
      return
    }

    if (this.f.email.value === 'admin@admin' && this.f.password.value === 'admin') {
      localStorage.setItem('loggedIn', 'true')
      this.router.navigate(['/dashboard'])
    } else {
      this.incorrectField = true
      return
    }

  }

}
