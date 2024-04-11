import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password1: new FormControl('', [Validators.required]),
    password2: new FormControl('', [Validators.required]),
    telnumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    fullname: new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
    })
  });

  constructor() { }

  ngOnInit(): void {
  }

  register(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
    }
  }

}
