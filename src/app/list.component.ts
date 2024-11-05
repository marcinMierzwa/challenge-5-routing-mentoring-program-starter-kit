import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User, UserService } from './user.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  template: `
    <h1>Users List</h1>
    <div class="mt-3">
      @if (users$ | async; as users) { @if (users.length > 0) {
      <ul class="list-group">
        @for (user of users; track user.id) {
        <li class="list-group-item d-flex justify-content-between">
          {{ user.email }}
          <div>
            <button
              class="btn btn-primary btn-sm me-2"
              [routerLink]="['/detail', user.id]"
            >
              View
            </button>
            <button
              class="btn btn-secondary btn-sm"
              [routerLink]="['/edit', user.id]"
            >
              Edit
            </button>
          </div>
        </li>
        }
      </ul>
      } @else {
      <h5 class="mt-5 text-center">Loading...</h5>
      } }
    </div>
  `,
  standalone: true,
  imports: [RouterModule, AsyncPipe],
})
export class ListComponent {
  userService: UserService = inject(UserService);
  users$: Observable<User[]> = this.userService.getAll();
}
