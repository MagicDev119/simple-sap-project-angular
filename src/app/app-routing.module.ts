import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { VideoGameComponent } from './video-game/video-game.component';

const routes: Routes = [
  { path: '', redirectTo: '/videogame', pathMatch: 'full' },
  { path: 'videogame', component: VideoGameComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
