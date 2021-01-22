import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatSectionComponent } from './chat-section/chat-section.component';

const routes: Routes = [
  { path: '' , component: ChatSectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
