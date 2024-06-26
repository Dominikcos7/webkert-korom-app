import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/model/User'
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    password1: new FormControl('', [Validators.required]),
    password2: new FormControl('', [Validators.required]),
    telnumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    fullname: new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
    })
  });
  error = false;

  constructor(
    private auth: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register() {
    if (this.registerForm.valid) {
      this.auth.register(this.registerForm.value.email as string, this.registerForm.value.password1 as string).then(cred => {
        this.error = false;
        const uid = cred.user?.uid;
        const user: User = {
          email: this.registerForm.value.email as string,
          telnumber: this.registerForm.value.telnumber as string,
          fullname: {
            firstname: this.registerForm.value.fullname?.firstname as string,
            lastname: this.registerForm.value.fullname?.lastname as string,
          }
        }
        this.userService.create(uid, user).then(_ => {
          this.router.navigate(['profile']);
        }).catch(_ => {
          this.error = true;
        });
      }).catch(_ => {
        this.error = true;
      });
    }
  }
}
