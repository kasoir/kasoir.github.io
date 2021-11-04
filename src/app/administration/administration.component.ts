import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

	public currentAdminURL = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public goToAdministrationArea = ( selectedAdminArea: string ) => {
		if ( selectedAdminArea ) {
			switch ( selectedAdminArea ) {
				case 'users':
				case 'movies':
				case 'actors':
				case 'directors':
				case 'categories':
				case 'reports':
					this.currentAdminURL = 'administration';
					break;
			}
			this.router.navigate( [ this.currentAdminURL, selectedAdminArea ] );
		} else {
			this.router.navigate( [ this.currentAdminURL ] );
		}
	}
}
