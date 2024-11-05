import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-program-starter-kit';
}
// async function getAllData() {
//   const response = await fetch('https://fakestoreapi.com/users');
//   const result = await response.json();
//   console.log(result);
// }
// getAllData()
