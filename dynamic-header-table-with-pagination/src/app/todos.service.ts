import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Todos } from './todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }
  readonly apiUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  getTodos(): Observable<Todos[]> {
    return this.http.get<Todos[]>(this.apiUrl)
    .pipe(
      catchError((error) => {
        console.log("Error fetching Todos", error);
        return of([]);
      })
    )
  }
}
