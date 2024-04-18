import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Appointment } from 'src/app/shared/model/Appontment';

@Component({
  selector: 'app-update-popup',
  templateUrl: './update-popup.component.html',
  styleUrls: ['./update-popup.component.scss']
})
export class UpdatePopupComponent implements OnInit {
  nailForm = new FormGroup({
    service: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
  });
  services = ['Lakk', 'Gél-lakk', 'Építés'];
  minDate: Date = new Date();

  constructor(
    private matDialogRef: MatDialogRef<UpdatePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      id: string;
      service: string;
      date: string | number;
      time: string;
      userId: string;
    },) { }

  ngOnInit(): void {
    this.nailForm.controls['service'].setValue(this.data.service, { onlySelf: true });
    this.nailForm.controls['date'].setValue(this.data.date as string, { onlySelf: true });
    this.nailForm.controls['time'].setValue(this.data.time, { onlySelf: true });
  }

  dateFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  yes() {
    if (this.nailForm.valid) {
      const appointment: Appointment = {
        id: this.data.id,
        service: this.nailForm.value.service as string,
        date: this.nailForm.value.date as string,
        time: this.nailForm.value.time as string,
        userId: this.data.userId
      }
      this.matDialogRef.close({ response: true, data: {...appointment} });
    }
  }

  no() {
    this.matDialogRef.close({ response: false });
  }
}
