import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do/to-do-list/to-do-list.component';
import { ItemToDoComponent } from './components/to-do/item-to-do/item-to-do.component';
import { SongItemComponent } from './components/ranking-songs/song-item/song-item.component';
import { TopTracksListComponent } from './components/ranking-songs/top-tracks-list/top-tracks-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToDoComponent } from './pages/to-do/to-do.component';
import { RankingSongsComponent } from './pages/ranking-songs/ranking-songs.component';
import { FormAddTaskComponent } from './components/to-do/form-add-task/form-add-task.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ItemToDoComponent,
    FormAddTaskComponent,
    SongItemComponent,
    TopTracksListComponent,
    NavbarComponent,
    ToDoComponent,
    RankingSongsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
