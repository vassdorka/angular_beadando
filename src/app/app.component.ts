import { Component, OnChanges, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test';

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.fetch().subscribe((data: any[]) => {
      localStorage.setItem('todos', JSON.stringify(data));
    });
  }
}
