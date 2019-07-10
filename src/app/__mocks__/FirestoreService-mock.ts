import { of } from 'rxjs';

export class MockFirestoreService {
  getTasks() {
      return of([]);
  }

  addTask() {}
}