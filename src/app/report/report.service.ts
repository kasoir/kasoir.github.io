import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { apiURL as BASE_API_URL } from 'settings/setting';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private REPORT_API = `${BASE_API_URL}/report`;

  constructor(
    private http: HttpClient,
  ) { }

  public generateReport (configuration: { from?: string, to?: string } ) {
		const url = `${ this.REPORT_API }/generateReport`;
		const headers = new HttpHeaders( {
			Accept: 'application/pdf'
		} ).set('Authorization',
		JSON.parse((localStorage.getItem('currentUserData') || '{"token":""}')).token || '');
		return this.http.post( url, configuration, { headers, responseType: 'blob' } ).pipe( timeout( 1200000 ), catchError( e => {
			console.error( 'Report error -> ', e );
			return of( null )
		} ) );
	}
}
