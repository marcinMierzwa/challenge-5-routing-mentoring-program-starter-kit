import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User, UserService } from './user.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Cart, CartService } from './cart.service';

@Component({
  template: `
    <h1>Detail View</h1>

    <!-- edit section -->
    <section>
      <div class="mt-3">
        @if (user$ | async; as user) { @if (user) {
        <div class="card text-center">
          <div class="card-header">User</div>
          <div class="card-body">
            <h5 class="card-title fw-normal">{{ user.email }}</h5>
            <p class="card-text">
              {{ user.name.firstname }} {{ user.name.lastname }}
            </p>
            <a [routerLink]="['/edit', user.id]" class="btn btn-primary"
              >Edit</a
            >
          </div>
          <div class="card-footer text-body-secondary"></div>
        </div>
        }} @else {
        <h5 class="mt-5 text-center">Sorry! User not found</h5>
        }
      </div>
    </section>

    <!-- cart section -->
    <section>
      <div class="mt-3">
        @if (carts$ | async; as carts) { @if ((carts.length > 0) && (user$ |
        async)) { @for (cart of carts; track cart.userId; let index = $index) {

        <div class="card text-center mt-3">
          <div class="card-header">Cart #{{ index + 1 }}</div>
          <div class="card-body">
            <h5 class="card-title fw-normal">Products</h5>
            <ul class="list-group">
              @for (product of cart.products; track product) {
              <li class="list-group-item">
                ProductId: {{ product.productId }}, Quantity:
                {{ product.quantity }}
              </li>
              }
            </ul>
          </div>
          <div class="card-footer text-body-secondary"></div>
        </div>
        } } @else {
        <h5 class="mt-5 text-center">Sorry! User cart not found</h5>
        }}
      </div>
    </section>
  `,
  standalone: true,
  imports: [RouterModule, AsyncPipe, JsonPipe],
})
export class DetailComponent {
  userService: UserService = inject(UserService);
  cartService: CartService = inject(CartService);
  user$: Observable<User> = of();
  carts$: Observable<Cart[]> = of([]);

  @Input() set id(userId: string) {
    this.user$ = this.userService.getOne(userId);
    this.carts$ = this.cartService.getCart(userId);
  }
}
