import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  todos: any[];
  displayedColumns: string[] = ['title', 'userId', 'completed', 'operation'];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data = localStorage.getItem('todos');
    this.todos = JSON.parse(data);
  }

  deleteItem(id) {
    this.todos = this.todos.filter((item) => item.id !== id);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  navigateToUpdate(id) {
    this.router.navigate(['details', id]);
  }
}
