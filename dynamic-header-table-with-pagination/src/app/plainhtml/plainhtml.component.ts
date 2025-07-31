import { NgClass, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todos } from '../todos';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-plainhtml',
  standalone: true,
  imports: [NgFor, NgIf, UpperCasePipe, NgClass],
  providers: [TodosService],
  templateUrl: './plainhtml.component.html',
  styleUrl: './plainhtml.component.css',
})
export class PlainhtmlComponent implements OnInit {
  constructor(private todos: TodosService) {}
  todosList: Todos[] = [];
  tableHeaders: any[] = [];
  paginatedData: Todos[] = [];
  currentPage: number = 1;
  ngOnInit(): void {
    this.todos.getTodos().subscribe((res) => {
      console.log('todos', res);
      this.todosList = res;
      this.tableHeaders = this.getTableHeaders(this.todosList);
      this.paginatedData = this.todosList.slice(0,25);
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

  prevPage() {
    if(this.currentPage > 1) {
      this.currentPage--;
      this.paginatedData = this.todosList.slice((this.currentPage - 1)*25, this.currentPage*25);
      console.log("prev", this.paginatedData);
    }
  }

  nextPage() {
    console.log("length", this.todosList.length /25)
    if(this.currentPage < this.todosList.length / 25) {
      this.currentPage++;
      this.paginatedData = this.todosList.slice((this.currentPage-1) * 25, this.currentPage * 25)
      console.log("next", this.paginatedData);
    }
  } 
}
