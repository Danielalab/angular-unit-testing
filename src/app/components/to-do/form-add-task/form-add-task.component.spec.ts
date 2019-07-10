import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddTaskComponent } from './form-add-task.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FirestoreService } from 'src/app/services/to-do/firestore.service';
import { MockFirestoreService } from 'src/app/__mocks__/FirestoreService-mock';

describe('FormAddTaskComponent', () => {
  let component: FormAddTaskComponent;
  let fixture: ComponentFixture<FormAddTaskComponent>;
  let firestoreService: FirestoreService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ FormAddTaskComponent ],
      providers: [
        { provide: FirestoreService, useClass: MockFirestoreService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    firestoreService = TestBed.get(FirestoreService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia de guardar el valor del input "aprender testing" en newNote', () => {

  })

  it('Deberia de renderizar el valor de newNote en el input', () => {

  })

  it('Deberia de llamar a "onSubmitFormAddNote" al dar submit al form', () => {

  })

  it('Deberia llamar a "addTask" con el text "agregando task" al ejecutar "onSubmitFormAddNote"', () => {

  })

  it('Deberia el resetear el valor del "inputEl" y "newNote" a "" al ejecutar "onSubmitFormAddNote"', () => {

  })
});
