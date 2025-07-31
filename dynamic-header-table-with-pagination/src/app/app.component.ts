import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TodosService } from './todos.service';
import { Todos } from './todos';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [TodosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dynamic-header-table-with-pagination';
 
  constructor(private router: Router) {}
  htmlTable() {
    this.router.navigate(['/html-table']);
  }

  materialTable() {
    this.router.navigate(['/material-table']);
  }
 
}
