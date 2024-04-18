import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  collectionName = "images";

  constructor(
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
  ) { }

  getUrl(id: string){
    return this.storage.ref(`/images/${id}`).getDownloadURL();
  }

  getAllImages(){
    return this.afs.firestore.collection(this.collectionName).get();
  }
}
