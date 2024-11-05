import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User, UserService } from './user.service';
import { AsyncPipe } from '@angular/common';

@Component({
  template: `
    <h1>Edit</h1>
    <div class="mt-3">
      <form #form="ngForm" (ngSubmit)="update()">
        @if (user.id > 0) {

        <!-- email -->
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            name="email"
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            #email="ngModel"
            [(ngModel)]="user.email"
            required
            email
          />
          @if ( email?.errors?.['required'] ) {
          <small id="email" class="form-text text-danger fst-italic fw-medium"
            >Email field is required!</small
          >
          } @if ( email?.touched && email?.errors?.['email'] ) {
          <small id="email" class="form-text text-danger fst-italic fw-medium"
            >Invalid Email format!</small
          >
          }
        </div>

        <!-- username -->
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            name="username"
            type="text"
            class="form-control"
            id="username"
            aria-describedby="usernameHelp"
            #username="ngModel"
            [(ngModel)]="user.username"
            required
            maxlength="50"
          />
          @if ( username?.errors?.['required'] ) {
          <small
            id="username"
            class="form-text text-danger fst-italic fw-medium"
            >Username field is required!</small
          >
          }
        </div>

        <!-- firstname -->
        <div class="mb-3">
          <label for="firstname" class="form-label">Name</label>
          <input
            name="firstname"
            type="text"
            class="form-control"
            id="firstname"
            aria-describedby="firstnameHelp"
            #firstname="ngModel"
            [(ngModel)]="user.name.firstname"
            required
            maxlength="50"
          />
          @if ( firstname?.errors?.['required'] ) {
          <small
            id="firstname"
            class="form-text text-danger fst-italic fw-medium"
            >Name field is required!</small
          >
          }
        </div>

        <!-- lastname -->
        <div class="mb-3">
          <label for="lastname" class="form-label">lastname</label>
          <input
            name="lastname"
            type="text"
            class="form-control"
            id="lastname"
            aria-describedby="lastnameHelp"
            #lastname="ngModel"
            [(ngModel)]="user.name.lastname"
            required
            maxlength="50"
          />
          @if ( lastname?.errors?.['required'] ) {
          <small
            id="lastname"
            class="form-text text-danger fst-italic fw-medium"
            >Lastname field is required!</small
          >
          }
        </div>

        <button type="submit" class="btn btn-primary" [disabled]="form.invalid">
          Save
        </button>
        } @else {
        <h5 class="mt-5 text-center">Sorry! User not found</h5>
        }
      </form>
    </div>
  `,
  styles: `
  .ng-touched { border-color: rgb(255, 77, 77);}
  .ng-valid { border-color: green;}
  `,
  standalone: true,
  imports: [RouterModule, FormsModule, AsyncPipe],
})
export class EditComponent {
  userService: UserService = inject(UserService);
  router: Router = inject(Router);
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
    this.userService.getOne(userId).subscribe((user: User) => {
      this.user = user;
    });
  }

  update(): void {
    this.userService.update(this.user).subscribe({
      next: (user: User) => {
        alert(`Thank you! User with id: ${user.id} was succesfull updated`);
        this.router.navigate(['/list']);
      },
      error: (err) => {
        alert(err.message);
        this.router.navigate(['/list']);
      },
    });
  }
}
