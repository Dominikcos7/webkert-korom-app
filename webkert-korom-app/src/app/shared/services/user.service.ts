import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  collectionName = 'users';

  constructor(
    private afs: AngularFirestore,
  ) { }

  create(uid: string | undefined, user: User) {
    return this.afs.collection<User>(this.collectionName).doc(uid).set(user);
  }

  getAll(){

  }

  getByUid(uid: string){
    return this.afs.collection(this.collectionName).doc(uid).get();
  }

  update(){

  }

  delete(uid: string){
    return this.afs.collection<User>(this.collectionName).doc(uid).delete();
  }
}
