import { of } from 'rxjs';

export class MockFirestoreService {
  getNotes() {
      return of([]);
  }
}