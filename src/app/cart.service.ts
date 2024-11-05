import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

export interface Cart {
    userId: number,
    products: [
        {
            productId: number;
            quantity: null;
        }
    ]
}

@Injectable({
    providedIn: 'root',
})
export class CartService {
    httpClient: HttpClient = inject(HttpClient);

    // https://fakestoreapi.com/carts/user/2
    getCart() {}
}