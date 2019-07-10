import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ToDoComponent } from './pages/to-do/to-do.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormAddTaskComponent } from './components/to-do/form-add-task/form-add-task.component';
import { ItemToDoComponent } from './components/to-do/item-to-do/item-to-do.component';
import { ToDoListComponent } from './components/to-do/to-do-list/to-do-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FirestoreService } from './services/to-do/firestore.service';
import { MockFirestoreService } from './__mocks__/FirestoreService-mock';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        ToDoComponent,
        NavbarComponent,
        FormAddTaskComponent,
        ItemToDoComponent,
        ToDoListComponent
      ],
      providers: [
        { provide: FirestoreService, useClass: MockFirestoreService }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

/*   it(`should have as title 'testing-videos'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('testing-videos');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to testing-videos!');
  }); */
});
