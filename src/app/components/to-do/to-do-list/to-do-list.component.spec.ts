import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { ToDoListComponent } from './to-do-list.component';
import { ItemToDoComponent } from '../item-to-do/item-to-do.component';
import { FirestoreService } from 'src/app/services/to-do/firestore.service';
import { MockFirestoreService } from 'src/app/__mocks__/FirestoreService-mock';
import { Observable, Observer } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ToDoListComponent', () => {
  let component: ToDoListComponent;
  let fixture: ComponentFixture<ToDoListComponent>;
  let firestoreService: FirestoreService;
  let ulEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // declarando el componente y sus componentes hijos
      declarations: [
        ToDoListComponent,
        ItemToDoComponent
      ],
      providers: [
        { provide: FirestoreService, useClass: MockFirestoreService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    firestoreService = TestBed.get(FirestoreService);
    fixture.detectChanges();
    ulEl = fixture.debugElement.query(By.css('ul'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('arrTasks deberia de ser un arr de 3 elementos y ulEl deberia de tener 3 nodos hijos al ejecutarse ngOnInit', fakeAsync(() => {
    expect(component.arrTasks.length).toBe(0);
    expect(ulEl.children.length).toBe(0);
    const mockTasks = [
      { text: 'Testing 1', id: 'abc1' },
      { text: 'Testing 2', id: 'abc2' },
      { text: 'Testing 3', id: 'abc3' },
    ];

    // mockeando el valor de retorno de getTasks creando un observable

    spyOn(firestoreService, 'addTask').and.returnValue(
      Observable.create((observer: Observer<{ text: string; id: string; }[]>) => {
        observer.next(mockTasks);
        return observer;
      })
    );

    component.ngOnInit();
    
    tick();

    fixture.detectChanges();

    expect(component.arrTasks.length).toBe(3);
    expect(component.arrTasks).toEqual(mockTasks);
    expect(ulEl.children.length).toBe(3);
  }))
});
