import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FirestoreService } from './firestore.service';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFirestoreMock } from 'src/app/__mocks__/angular-firestore-mock';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

const fixtureData = [
  { 
    id: 'Note_1',
    data: { text: 'test 1' }
  },
  { 
    id: 'Note_2',
    data: { text: 'test 2' }
  },
  { 
    id: 'Note_3',
    data: { text: 'test 3' }
  },
]

describe('FirestoreService', () => {
  let firestoreService: FirestoreService;
  let angularFirestore: AngularFirestoreMock;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [ { provide: AngularFirestore, useValue: new AngularFirestoreMock(fixtureData) } ],
    imports: [
      // AngularFireModule.initializeApp(environment),
      AngularFirestoreModule
    ]
  }));

  beforeEach(() => {
    firestoreService = TestBed.get(FirestoreService);
  })

  it('should be created', () => {
    
    expect(firestoreService).toBeTruthy();
  });

  it('addTask deberia de agregar una nota', fakeAsync(() => {
    let result;
    firestoreService.addTask('testing agregar nota')
      .then(response => {
        result = response
      })
    tick();
    expect(result.data.text).toBe('testing agregar nota')
  }))

  it('getNote deberia de retornar un observable', () => {
    const result = [
      { id: 'Note_1', text: 'test 1' },
      { id: 'Note_2', text: 'test 2' },
      { id: 'Note_3', text: 'test 3' }
    ]
    firestoreService.getTasks()
      .subscribe((response) => {
        expect(response).toEqual(result);
      })
  })
});
