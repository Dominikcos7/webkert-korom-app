import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from 'src/app/shared/services/appointment.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  @Input() uid?: string;
  @Output() onSubmit: EventEmitter<boolean> = new EventEmitter();
  nailForm = new FormGroup({
    service: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
  });
  services = ['Lakk', 'Gél-lakk', 'Építés'];
  defaultService = this.services[0];
  minDate: Date = new Date();

  constructor(
    private appointmentService: AppointmentService,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.nailForm.controls['service'].setValue(this.defaultService, { onlySelf: true });
  }

  submit() {
    if (this.nailForm.valid) {
      this.appointmentService.save(
        this.nailForm.value.service as string,
        this.nailForm.value.date as string,
        this.nailForm.value.time as string,
        this.uid as string
      ).then(_ => console.log('appointment added successfully')).catch(error => console.error(error));
    } else {
      console.error('invalid form');
    }
    this.onSubmit.emit(true);
  }

  dateFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };
}
