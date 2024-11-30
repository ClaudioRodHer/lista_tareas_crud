import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  standalone: true, 
  styleUrls: ['./kanban-board.component.css'],
  imports: [CommonModule,FormsModule],
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
