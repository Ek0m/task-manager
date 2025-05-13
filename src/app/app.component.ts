import { Component, computed, inject } from '@angular/core';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  imports: [TaskFormComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'task-manager';
  taskService = inject(TaskService);

 private tasks = this.taskService.tasks;

  todoItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter((task) => {
      task.status === 'pending';
    });
  });
  ongoingItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter((task) => {
      task.status === 'ongoing';
    });
  });
  completedItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter((task) => {
      task.status === 'completed';
    });
  });
}
