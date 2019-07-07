import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FirestoreService } from 'src/app/services/to-do/firestore.service';

@Component({
  selector: 'app-form-add-task',
  templateUrl: './form-add-task.component.html',
  styleUrls: ['./form-add-task.component.css']
})
export class FormAddTaskComponent {
  newNote = new FormControl('');
  constructor(private firestoreService: FirestoreService) { }

  onSubmitFormAddNote(event) {
    event.preventDefault();
    this.firestoreService.addNote(this.newNote.value);
    this.newNote.setValue('');
  }

}
