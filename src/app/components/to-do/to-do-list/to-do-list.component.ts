import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/to-do/firestore.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  arrTasks;
  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.firestoreService.getTasks()
      .subscribe(response => {
        this.arrTasks = response;
      })
  }

}
