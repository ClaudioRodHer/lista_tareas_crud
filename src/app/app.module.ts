import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AppComponent, KanbanBoardComponent,LoginComponent,
    RegisterComponent],
  imports: [BrowserModule, FormsModule,CommonModule],
  providers: [],
  bootstrap: [AppComponent]
  

  
})
export class AppModule {}
