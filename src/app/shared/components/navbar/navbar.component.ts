import { Component, OnInit } from '@angular/core';
import { SidebarToggleService } from '../../services/sidebar-toggle/sidebar-toggle.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private sidebarService: SidebarToggleService) { }

  ngOnInit(): void { }

  sidebarToggle() {
    this.sidebarService.toggle();
  }
}
