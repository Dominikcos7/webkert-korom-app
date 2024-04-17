import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GalleryComponent } from 'src/app/gallery/gallery.component';
import { Appointment } from 'src/app/shared/model/Appontment';
import { AppointmentService } from 'src/app/shared/services/appointment.service';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';
import { UpdatePopupComponent } from '../update-popup/update-popup.component';

@Component({
  selector: 'app-profile-text',
  templateUrl: './profile-text.component.html',
  styleUrls: ['./profile-text.component.scss']
})
export class ProfileTextComponent implements OnInit {
  @Input() username?: string;
  @Input() appointments: Appointment[] = [];
  @Output() onChange: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private appointmentService: AppointmentService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  delete(appointment: Appointment) {
    this.dialog.open(DeletePopupComponent, {
      data: { ...appointment }
    }).afterClosed().subscribe(resp => {
      if (resp) {
        this.appointmentService.delete(appointment).then(_ => this.onChange.emit(true)).catch(error => {
          console.error(error);
        });
      }
    });
  }

  update(appointment: Appointment) {
    return this.dialog.open(UpdatePopupComponent, {
      data: { ...appointment }
    }).afterClosed().subscribe(resp => {
      if (resp.response) {
        this.appointmentService.update(resp.data).then(_ => {
          this.onChange.emit(true);
        }).catch(error => console.error(error));
      }
    });
  }

}
