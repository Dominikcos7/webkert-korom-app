import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Appointment } from '../model/Appontment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(
    private afs: AngularFirestore
  ) { }

  save(service: string, date: string, time: string, uid: string){
    const appointment: Appointment = {
      service: service,
      date: date,
      time: time,
      userId: uid
    }
    return this.afs.collection('appointments').add(appointment);
  }

  get(){

  }

  delete(){

  }

  update(){

  }
}
