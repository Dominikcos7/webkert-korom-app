import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Comment } from '../model/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  collectionName = "comments";

  constructor(
    private afs: AngularFirestore,
  ) { }

  getUserComments(uid: string){
    return this.afs.firestore.collection(this.collectionName).where("userId", "==", uid).get();
  }

  add(comment: Comment){
    return this.afs.collection(this.collectionName).doc(comment.docId).set(comment);
  }

  delete(docId: string){
    return this.afs.collection(this.collectionName).doc(docId).delete();
  }

  getDocId(){
    return this.afs.createId();
  }

  getOtherComments(uid: string){
    return this.afs.firestore.collection(this.collectionName).where("userId", "!=", uid).get()
  }
}
