import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public items: MenuItem[] = [];
  showBar = false;
  public showCase = false;
  constructor(
    private authService: AuthService,
    ) { }
    
    ngOnInit(): void {
    this.showCase = (this.authService?.user.uid !=='') ? true : false;
    this.items = [
      {
        label: 'Home',
        routerLink: '/',
        visible: true,
      },
      {
        label: 'Movies',
        style: { 'margin-left': 'auto', float: 'right', color: 'white' },
        visible: true,
        items: [{
          label: 'Movies',
          visible: true,
          routerLink: '/moviesPage',
        }, {
          label: 'Actors',
          visible: true,
          routerLink: '/actorsPage',
        }, {
          label: 'Directors',
          visible: true,
          routerLink: '/directorsPage',
        }],
      },
      {
        label: 'Administration',
        visible: (this.authService.user.isAdmin) ? true : false,
        items: [
          {
            label: 'Administration Home',
            visible: true,
            routerLink: '/administration',
          }, {
            label: 'Users',
            visible: true,
            routerLink: '/administration/users',
          }, {
            label: 'Movies',
            visible: true,
            routerLink: '/administration/movies',
          }, {
            label: 'Actors',
            visible: true,
            routerLink: '/administration/actors',
          }, {
            label: 'Directors',
            visible: true,
            routerLink: '/administration/directors',
          }, {
            label: 'Categories',
            visible: true,
            routerLink: '/administration/categories',
          }, {
            label: 'Reports',
            visible: true,
            routerLink: '/administration/reports',
          }],
      },
      {
        label: this.authService.user.name,
        style: { 'margin-left': 'auto', float: 'right', color: 'white' },
        icon: 'pi pi-user nav-user',
        items: [{
          label: 'Sign In',
          visible: !this.showCase,
          routerLink: '/signIn',
          icon: 'pi pi-power-on',
        }, {
          label: 'Sign Out',
          visible: this.showCase,
          command: () => this.signout(),
          icon: 'pi pi-power-off',
        }],
      }
    ]
  }
  public signout = async () => {
    await this.authService.signOutUser();
    localStorage.clear();
    window.location.reload();
  }

}