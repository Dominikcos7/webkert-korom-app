import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  getNailForm() {
    return new FormGroup({
      service: new FormControl(''),
      date: new FormControl(''),
      time: new FormControl(''),
    });
  }
}
