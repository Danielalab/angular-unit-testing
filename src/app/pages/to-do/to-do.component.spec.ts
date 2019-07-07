import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoComponent } from './to-do.component';
import { FormAddTaskComponent } from 'src/app/components/to-do/form-add-task/form-add-task.component';
import { ItemToDoComponent } from 'src/app/components/to-do/item-to-do/item-to-do.component';
import { ToDoListComponent } from 'src/app/components/to-do/to-do-list/to-do-list.component';
import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFirestoreMock } from '../../__mocks__/angular-firestore-mock';

describe('ToDoComponent', () => {
  let component: ToDoComponent;
  let fixture: ComponentFixture<ToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // declarando todos los componentes pertenecientes a esta pagina.
      declarations: [
        ToDoComponent,
        FormAddTaskComponent,
        ItemToDoComponent,
        ToDoListComponent
      ],
      // declarando los provedores utilizados
      providers: [
        // Configurando el uso del mock de Angular Firestore
        { provide: AngularFirestore, useValue: new AngularFirestoreMock() }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
