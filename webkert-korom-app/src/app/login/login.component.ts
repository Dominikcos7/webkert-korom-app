import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });
  error = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value.email as string, this.loginForm.value.password as string).then(cred => {
        this.error = false;
        this.router.navigate(['profile']);
      }).catch(_ => {
        this.error = true;
      });
    }
  }
}
