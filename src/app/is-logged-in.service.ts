import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedInService {
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean>;
  constructor() {
    this.isLoggedIn$ = this._isLoggedIn.asObservable();
    this._isLoggedIn.next(JSON.parse(localStorage.getItem('isLoggedIn')));
  }

  set(value: boolean) {
    this._isLoggedIn.next(value);
    localStorage.setItem('isLoggedIn', JSON.stringify(value));
  }
}
