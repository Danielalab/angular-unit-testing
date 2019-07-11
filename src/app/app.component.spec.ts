import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
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
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { routes } from './app-routing.module';
import { RankingSongsComponent } from './pages/ranking-songs/ranking-songs.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        ToDoComponent,
        NavbarComponent,
        FormAddTaskComponent,
        ItemToDoComponent,
        ToDoListComponent,
        RankingSongsComponent
      ],
      providers: [
        { provide: FirestoreService, useClass: MockFirestoreService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    // injectamos una instacia de router y location
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    // Esto configura un "oyente" de cambio de ubicación y realiza la navegación inicial.
    router.initialNavigation();
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('Router: App', () => {
    // el enrutamiento es una actividad asicnrona por lo que usamos fakeAsync
    it('Deberia de redireccionar a "/to-do" al navegar a ""', fakeAsync(() => { (1)
      router.navigate(['']);
      tick();
      expect(location.path()).toBe('/to-do');
    }));

    it('Deberia de ir a "/to-do" al navegar a "to-do"', fakeAsync(() => { (1)
      router.navigate(['']);
      tick();
      expect(location.path()).toBe('/to-do');
    }));

    it('Deberia de ir a "/ranking-songs" al navegar a "ranking-songs"', fakeAsync(() => { (1)
      router.navigate(['']);
      tick();
      expect(location.path()).toBe('/to-do');
    }));
  })

});
