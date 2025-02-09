import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-left-sidebar',
  imports: [RouterModule, CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {
  
  isLeftSidebarCollapsed = input.required<boolean>();
  changeisLeftSidebarCollapsed = output<boolean>();
  
  items = [
    {
      routeLink: 'dashboard',
      icon: 'fal fa-home',
      label: 'Dashboard'
    },
    {
      routeLink: 'products',
      icon: 'fal fa-box-open',
      label: 'Products'
    },
    {
      routeLink: 'pages',
      icon: 'fal fa-file',
      label: 'Pages'
    },
    {
      routeLink: 'settings',
      icon: 'fal fa-cog',
      label: 'Settings'
    },
  ];

  toggleCollapsed(): void {
    this.changeisLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed())
  }

  closeSidenav(): void {
    this.changeisLeftSidebarCollapsed.emit(true)
  }
}