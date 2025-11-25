import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public signIn(user: User): Observable<null> {
    return this.http.post('http://localhost:3000/login', user)
    .pipe(switchMap(() => {
      return of(null);
    }))
  }

  public signUp(user: User): Observable<null> {
    return this.http.post('http://localhost:3000/signup', user)
    .pipe(switchMap(() => {
      return of(null);
    }))
  }
}
