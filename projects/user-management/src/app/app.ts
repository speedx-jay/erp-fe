import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  RouterOutlet,
  Router,
  NavigationEnd,
  ActivatedRoute,
  Event as RouterEvent,
  Data,
} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <router-outlet />
  `,
})
export class App implements OnInit {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);

  public ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route: ActivatedRoute) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route: ActivatedRoute) => route.data),
      )
      .subscribe((data: Data) => {
        this.titleService.setTitle(`${data['title'] ?? ''}`);
      });
  }
}
