import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todos } from '../todos';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-plainhtml',
  standalone: true,
  imports: [NgFor, NgIf, UpperCasePipe],
  providers: [TodosService],
  templateUrl: './plainhtml.component.html',
  styleUrl: './plainhtml.component.css',
})
export class PlainhtmlComponent implements OnInit {
  constructor(private todos: TodosService) {}
  todosList: Todos[] = [];
  tableHeaders: any[] = [];
  ngOnInit(): void {
    this.todos.getTodos().subscribe((res) => {
      console.log('todos', res);
      this.todosList = res;
      this.tableHeaders = this.getTableHeaders(this.todosList);
      console.log(this.tableHeaders);
    });
  }

  getTableHeaders(data: Todos[]): string[] {
    const keySet = new Set<string>();
    data.forEach((item) => {
      Object.keys(item).forEach((key) => {
        keySet.add(key);
      });
    });
    return [...keySet];
  }
}
