import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { AppointmentService } from '../shared/services/appointment.service';
import { Appointment } from '../shared/model/Appontment';
import { Timestamp, doc } from 'firebase/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username: string = '';
  user?: any;
  uid?: string;
  selectedTime?: any;
  appointments: Appointment[] = [];

  constructor(
    private userService: UserService,
    private appointmentService: AppointmentService,
  ) { }

  ngOnInit(): void {
    this.initializeUser();
    this.getAppointments();
  }

  initializeUser() {
    this.uid = JSON.parse(localStorage.getItem('user') as string).uid;
    this.userService.getByUid(this.uid as string).subscribe(user => {
      this.user = user;
      this.username = this.user.get('fullname').firstname;
    });
  }

  getAppointments(){
    this.appointmentService.getAll(this.uid as string).then(querysnaphot => {
      querysnaphot.docs.forEach(documentsnaphot => {
        const appointment: Appointment = {
          id: documentsnaphot.data()['id'],
          service: documentsnaphot.data()['service'],
          date: (documentsnaphot.data()['date'] as unknown as Timestamp).seconds*1000,
          time: documentsnaphot.data()['time'],
          userId: this.uid as string
        }
        this.appointments.push(appointment);
      });
    });
  }

  refreshAppointments(_: boolean){
    this.appointments = [];
    this.getAppointments();
  }
}
