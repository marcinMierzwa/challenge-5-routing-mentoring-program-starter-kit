import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    template: `
    <div class="px-4 py-5 text-center">
        <h1>Oops! You're lost!</h1>
        <p>The page you are looking for was not found</p>
        <button class='btn btn-danger' routerLink="/list">Bask to home</button>
    </div>
    `,
    standalone: true,
    imports: [RouterModule],
})
export class NotFoundComponent {}