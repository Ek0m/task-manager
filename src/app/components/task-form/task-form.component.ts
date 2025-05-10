import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  taskform = new FormGroup({
    taskName: new FormControl('', { nonNullable: true }),
    status: new FormControl('pending', { nonNullable: true }),
  })

  onSubmit() {
    console.log(this.taskform.value);
    this.taskform.reset();
  }
}
