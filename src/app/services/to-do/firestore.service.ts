import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private angularFirestore: AngularFirestore) { }

  addNote(textTask: string) {
    return this.angularFirestore.collection('notes').add({
      text: textTask
    })
  }

  getNotes() {
    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change.
    return this.angularFirestore.collection('notes').snapshotChanges()
      .pipe(
        map(actions => actions.map(action => {
          const data = action.payload.doc.data();
          const id = action.payload.doc.id;
          return { id, ...data };
        }))
      );
  }
}
