import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {

constructor(private router: Router, private route: ActivatedRoute) {}

  go(path: string) {
    this.router.navigate([path], { relativeTo: this.route });
  }

}
