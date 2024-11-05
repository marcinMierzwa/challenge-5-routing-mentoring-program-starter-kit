import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Cart {
  userId: number;
  products: [
    {
      productId: number;
      quantity: number;
    }
  ];
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  httpClient: HttpClient = inject(HttpClient);

  getCart(id: string): Observable<Cart[]> {
    return this.httpClient
      .get<any[]>(`https://fakestoreapi.com/carts/user/${id}`)
      .pipe(
        map((carts: any[]) =>
          carts.map((cart: any) => ({
            userId: cart.userId,
            products: cart.products.map((product: any) => ({
              productId: product.productId,
              quantity: product.quantity,
            })),
          }))
        )
      );
  }
}
