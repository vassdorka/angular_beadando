import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, find, map } from 'rxjs/operators';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  item$: Observable<any>;
  todos: any[];

  constructor(private route: ActivatedRoute, private snack: MatSnackBar) {
    this.todos = JSON.parse(localStorage.getItem('todos'));
  }

  ngOnInit(): void {
    this.item$ = this.route.params.pipe(
      map(({ id }) => {
        return this.todos.find((todo) => todo.id === parseInt(id));
      })
    );
  }

  submit({ value }, id) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    this.todos[index] = { ...value, id };
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.snack.open('Todo Updated!', null, { duration: 2000 });
  }
}
