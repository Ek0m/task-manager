import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  taskService = inject(TaskService);

  taskform = new FormGroup({
    taskName: new FormControl('', { nonNullable: true }),
    status: new FormControl('pending', { nonNullable: true }),
  })

  onSubmit() {
    const taskValue = this.taskform.getRawValue();
    console.log(taskValue);
    this.taskService.addTask(taskValue.taskName, taskValue.status);
    this.taskform.reset();
  }
}
