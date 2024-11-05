import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { User, UserService } from './user.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  template: `
    <h1>Edit</h1>

    <div class="mt-3">
      <form >
        @if (user.id > 0) {
        <!-- email -->
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <!-- username -->
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <!-- firstname -->
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <!-- lastname -->
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <button type="submit" class="btn btn-primary">Save</button>
        } @else {
        <h5 class="mt-5 text-center">Sorry! User not found</h5>
        }
      </form>
    </div>
  `,
  standalone: true,
  imports: [RouterModule, FormsModule, AsyncPipe],
})
export class EditComponent {
  userService: UserService = inject(UserService);
  user: User = {
    id: 0,
    email: '',
    username: '',
    password: '',
    name: {
      firstname: '',
      lastname: '',
    },
  };
  @Input() set id(userId: string) {
    this.userService
    .getOne(userId)
    .subscribe(
        (user: User) => {
            this.user = user;
        }
    )
  }
}
