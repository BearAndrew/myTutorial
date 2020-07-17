import { Component } from '@angular/core';
import { SidebarService } from './nav-component/sidebar/sidebar.service';
import { Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyTutorial';
  isHome = true;
  screenSm = 768;

  constructor(public sidebarservice: SidebarService, public router: Router) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationStart) {
          // Show loading indicator
        }

        if (event instanceof NavigationEnd) {
          // Hide loading indicator
          const sidebarState = this.getSideBarState();
          if (this.router.url === '/home') {
            this.isHome = true;
            if (!sidebarState) { this.toggleSidebar(); }
          } else if (this.router.url !== '/home' && sidebarState) {
            if (this.isHome) {
              this.isHome = false;
              if (window.innerWidth >= this.screenSm) { this.toggleSidebar(); }
            }
          }
        }

        if (event instanceof NavigationError) {
            console.log(event.error);
        }
      }
    );
  }

  // ========== sidebar ==========
  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
  toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }
  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }
  // ========== sidebar ==========
}
