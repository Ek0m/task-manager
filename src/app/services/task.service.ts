import { Injectable, signal } from '@angular/core';
import { TaskItem } from '../models/task-item.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
   tasks = signal<TaskItem[]>([]);

   addTask(taskName: string, status: string) {
     this.tasks.update((prevTasks) => {
      return [...prevTasks, { taskName, status }];
     });
   }
}
