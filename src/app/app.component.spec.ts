import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'lista_tareas_crud' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('lista_tareas_crud');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, lista_tareas_crud');
  });
});


import { Component } from '@angular/core';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent {
  tasks: { name: string; stage: number }[] = [
    { name: '1', stage: 0 },
    { name: '2', stage: 0 }
  ];

  stagesNames: string[] = ['Backlog', 'To Do', 'Ongoing', 'Done'];
  newTaskName: string = '';

  get stagesTasks(): { name: string; stage: number }[][] {
    let stages: { name: string; stage: number }[][] = [];
    for (let i = 0; i < this.stagesNames.length; ++i) {
      stages.push([]);
    }
    for (let task of this.tasks) {
      stages[task.stage].push(task);
    }
    return stages;
  }

  addTask(): void {
    if (this.newTaskName.trim() === '') return;
    this.tasks.push({ name: this.newTaskName, stage: 0 });
    this.newTaskName = '';
  }

  moveTaskBack(task: { name: string; stage: number }): void {
    if (task.stage > 0) {
      task.stage -= 1;
    }
  }

  moveTaskForward(task: { name: string; stage: number }): void {
    if (task.stage < this.stagesNames.length - 1) {
      task.stage += 1;
    }
  }

  deleteTask(task: { name: string; stage: number }): void {
    this.tasks = this.tasks.filter((t) => t !== task);
  }
}
