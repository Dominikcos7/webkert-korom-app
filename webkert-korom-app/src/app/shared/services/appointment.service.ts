import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Appointment } from '../model/Appontment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  collectionName = 'appointments'

  constructor(
    private afs: AngularFirestore
  ) { }

  save(service: string, date: string, time: string, uid: string){
    const id = this.afs.createId();
    const appointment: Appointment = {
      id: id,
      service: service,
      date: date,
      time: time,
      userId: uid
    }
    return this.afs.collection(this.collectionName).doc(id).set(appointment);
  }

  // dateToString(date: string){
  //   console.log(date);
  //   const split = date;
  //   return split[0] + ' ' + split[1] + ' ' + split[1];
  // }

  getAll(uid: string){
    return this.afs.firestore.collection(this.collectionName).where("userId", "==", uid).get();
  }

  delete(appointment: Appointment){
    return this.afs.collection(this.collectionName).doc(appointment.id).delete();
  }

  update(appointment: Appointment){
    return this.afs.collection(this.collectionName).doc(appointment.id).set(appointment);
  }
}
