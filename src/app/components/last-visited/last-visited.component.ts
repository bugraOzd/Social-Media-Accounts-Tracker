import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { routes } from '../../utils/routes';

@Component({
  selector: 'app-last-visited',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './last-visited.component.html',
  styleUrl: './last-visited.component.css'
})
export class LastVisitedComponent {
  visitedRoutes: KeyValue<string, string>[] = []
  routes = routes;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.routes.find(item => item.value === event.url);
        this.visitedRoutes = [...this.visitedRoutes!, currentRoute!];
        this.visitedRoutes = this.getUniqueRoutes(this.visitedRoutes);
      }
    });
  }

  private getUniqueRoutes(routes: KeyValue<string, string>[]): KeyValue<string, string>[] {
    return routes.filter((route, index, self) =>
      index === self.findIndex((t) => t.key === route.key)
    );
  }
}
