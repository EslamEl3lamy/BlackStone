import { Component, OnInit } from '@angular/core';
import { SidebarToggleService } from 'src/app/shared/services/sidebar-toggle/sidebar-toggle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isSidebarOpened = false;
  sideMenus = [
    {
      sideMenuIcon: 'fa-house',
      sideMenuName: 'Home'
    },
    {
      sideMenuIcon: 'fa-comment-dots',
      sideMenuName: 'Messages'
    },
    {
      sideMenuIcon: 'fa-user',
      sideMenuName: 'Profile'
    },
    {
      sideMenuIcon: 'fa-bookmark',
      sideMenuName: 'Saved Posts'
    },
    {
      sideMenuIcon: 'fa-cog',
      sideMenuName: 'Settings'
    }
  ];

  constructor(private sidebarService: SidebarToggleService) { }

  ngOnInit(): void {
    this.sidebarService.isSidebarOpened$.subscribe(isSidebarOpened => this.isSidebarOpened = isSidebarOpened);
  }

  sidebarToggle() {
    this.sidebarService.toggle();
  }
}
