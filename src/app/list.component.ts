import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    template: `
    <h1>Users List</h1>
    `,
    standalone: true,
    imports: [RouterModule],
})
export class ListComponent {}