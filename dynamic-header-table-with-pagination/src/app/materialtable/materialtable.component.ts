import { Component, ViewChild, viewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { TodosService } from '../todos.service';
import { Todos } from '../todos';
import { NgFor, UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-materialtable',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, UpperCasePipe, NgFor],
  templateUrl: './materialtable.component.html',
  styleUrl: './materialtable.component.css'
})
export class MaterialtableComponent {
constructor(private todos: TodosService) {}

  todosList =  new MatTableDataSource<Todos>();
 tableHeaders: any[] = [];
 @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.todos.getTodos().subscribe((res) => {
      this.todosList.data = res;
       this.tableHeaders = this.getTableHeaders(this.todosList.data).filter(header => header !== 'userId');
    });
  }

   ngAfterViewInit(): void {
    this.todosList.paginator = this.paginator;
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
