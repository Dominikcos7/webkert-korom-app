import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from '../shared/services/appointment.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username: string = '';
  user?: any;
  uid?: string;
  nailForm = new FormGroup({
    service: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
  });
  services = ['service1', 'service2', 'service3'];
  defaultService = this.services[0];
  minDate: Date = new Date();
  selectedTime?: any;

  constructor(
    private userService: UserService,
    private appointmentService: AppointmentService,
  ) { }

  ngOnInit(): void {
    this.initializeUser();
    this.initializeForm();
  }

  initializeUser() {
    this.uid = JSON.parse(localStorage.getItem('user') as string).uid;
    this.userService.getByUid(this.uid as string).subscribe(user => {
      this.user = user;
      this.username = this.user.get('fullname').firstname;
    });
  }

  initializeForm() {
    this.nailForm.controls['service'].setValue(this.defaultService, { onlySelf: true });
  }

  dateFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  submit() {
    if (this.nailForm.valid) {
      console.log(this.nailForm.value.date as string);
      this.appointmentService.save(
        this.nailForm.value.service as string,
        this.nailForm.value.date as string,
        this.nailForm.value.time as string,
        this.uid as string
      ).then(_ => console.log('appointment added successfully')).catch(error => console.error(error));
    }
  }
}
