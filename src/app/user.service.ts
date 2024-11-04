import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

export interface User {
    id: number;
    email: string;
    username: string;
    password: string;
    name: {
        firstname: string;
        lastname: string;
    }
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    httpClient: HttpClient = inject(HttpClient);

    getAll() {}

    getOne() {}

    update() {}
}