import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpClient: HttpClient = inject(HttpClient);

  getAll(): Observable<User[]> {
    return this.httpClient.get<any[]>('https://fakestoreapi.com/users').pipe(
      map((users: any[]) =>
        users.map((user) => ({
          id: user.id,
          email: user.email,
          username: user.username,
          password: user.password,
          name: {
            firstname: user.name.firstname,
            lastname: user.name.lastname,
          },
        }))
      )
    );
  }

  getOne(id: string): Observable<User> {
    return this.httpClient
      .get<any>(`https://fakestoreapi.com/users/${id}`)
      .pipe(
        map((user: any) => ({
          id: user.id,
          email: user.email,
          username: user.username,
          password: user.password,
          name: {
            firstname: user.name.firstname,
            lastname: user.name.lastname,
          },
        }))
      );
  }

  update() {}
}
