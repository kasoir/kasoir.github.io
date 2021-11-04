import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movie } from 'models/movie.model';
import { AuthService } from 'src/app/auth.service';
import { MoviesService } from 'src/app/movies/movies.service';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss'],
	animations: [
		trigger('routerTransition', [
			transition('* <=> *', [
				query(':enter, :leave', style({ position: 'absolute', width: '100%', top: '0', left: '0' }), { optional: true }),
				query(':enter', style({ opacity: 0 }), { optional: true }),
				query(':leave', animateChild(), { optional: true }),
				group([
					query(':leave', [animate('.5s ease-out', style({ opacity: 0 }))], { optional: true }),
					query(':enter', [animate('.5s ease-out', style({ opacity: 1 }))], { optional: true })
				]),
				query(':enter', animateChild(), { optional: true })
			]),
		])]
})
export class HomePageComponent implements OnInit {


	constructor(
		private authService: AuthService,
	) {}

	async ngOnInit() {
		await this.authService.verifyUserToken()
	}
	getAnimationState(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animateState;
	}
}
