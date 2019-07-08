import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// importando componentes
import { ToDoComponent } from './to-do.component';
import { FormAddTaskComponent } from 'src/app/components/to-do/form-add-task/form-add-task.component';
import { ItemToDoComponent } from 'src/app/components/to-do/item-to-do/item-to-do.component';
import { ToDoListComponent } from 'src/app/components/to-do/to-do-list/to-do-list.component';

// Importando servicio y mocks
import { MockFirestoreService } from '../../__mocks__/FirestoreService-mock';
import { FirestoreService } from 'src/app/services/to-do/firestore.service';

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
        // Configurando el uso del mock de FirestoreService
        { provide: FirestoreService, useClass: MockFirestoreService }
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
