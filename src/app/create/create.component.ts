import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  todos: any[];
  todo = {
    title: null,
    userId: null,
    completed: false,
  };
  constructor(private snack: MatSnackBar) {
    this.todos = JSON.parse(localStorage.getItem('todos'));
  }
  ngOnInit(): void {}
  submit(form) {
    const id = this.todos.length + 1;
    this.todos.push({ ...form.form.value, id });
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.snack.open('TODO successfully added to the list!', null, {
      duration: 2000,
    });
    form.resetForm();
  }
}
