import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddTaskComponent } from './form-add-task.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FirestoreService } from 'src/app/services/to-do/firestore.service';
import { MockFirestoreService } from 'src/app/__mocks__/FirestoreService-mock';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FormAddTaskComponent', () => {
  let component: FormAddTaskComponent;
  let fixture: ComponentFixture<FormAddTaskComponent>;
  let firestoreService: FirestoreService;
  let inputEl: DebugElement;
  let formEl: DebugElement;

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
    inputEl = fixture.debugElement.query(By.css('input'));
    formEl = fixture.debugElement.query(By.css('form'))
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia de renderizar el valor de newNote en el input', () => {
    component.newNote.setValue('aprender tests');
    expect(component.newNote.value).toBe('aprender tests');
    expect(inputEl.nativeElement.value).toBe('aprender tests');
  })

  it('Deberia de llamar a "onSubmitFormAddNote" al dar submit al form', () => {
    spyOn(component, 'onSubmitFormAddNote');
    formEl.triggerEventHandler('submit', null);
    expect(component.onSubmitFormAddNote).toHaveBeenCalled();
  })

  it('Deberia llamar a "addTask" con el text "agregando task" al ejecutar "onSubmitFormAddNote"', () => {
    spyOn(firestoreService, 'addTask');
    component.newNote.setValue('agregando task');
    component.onSubmitFormAddNote({ preventDefault: () => {} })
    expect(firestoreService.addTask).toHaveBeenCalled();
    expect(firestoreService.addTask).toHaveBeenCalledWith('agregando task');
  })

  it('Deberia el resetear el valor del "inputEl" y "newNote" al ejecutar "onSubmitFormAddNote"', () => {
    component.newNote.setValue('agregando task');
    expect(component.newNote.value).toBe('agregando task');
    expect(inputEl.nativeElement.value).toBe('agregando task');
    // ejecuto el metodo "onSubmitFormAddNote"
    component.onSubmitFormAddNote({ preventDefault: () => {} });
    expect(component.newNote.value).toBe('');
    expect(inputEl.nativeElement.value).toBe('');
  })
});
