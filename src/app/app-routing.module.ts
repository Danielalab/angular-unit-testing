import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoComponent } from './pages/to-do/to-do.component';
import { RankingSongsComponent } from './pages/ranking-songs/ranking-songs.component';


export const routes: Routes = [
  { path: 'to-do', component:  ToDoComponent},
  { path: 'ranking-songs', component: RankingSongsComponent },
  { path: '', redirectTo: '/to-do', pathMatch: 'full' },
  { path: '**', redirectTo: '/to-do' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
