import { Component } from '@angular/core';
import { TaskFormComponent } from './components/task-form/task-form.component';


@Component({
  selector: 'app-root',
  imports: [TaskFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-manager';
}
