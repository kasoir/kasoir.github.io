import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ReportService } from 'src/app/report/report.service';
import { getnowDate } from 'utils/getnow';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  public filterFrom = '20210101';
	public filterTo = '20211231';
  public isLoading = false;
  public pdfURL: any = '';

  constructor(
		private sanitizer: DomSanitizer,
    private reportService: ReportService,
  ) { }

  ngOnInit(): void {
  }

  public generatePDF = async () => {
		this.isLoading = true;
		try {
			this.reportService.generateReport({
				from: this.filterFrom, to: this.filterTo,
			} )
				.subscribe(
					( res: any ) => {
						if ( res ) {
							this.isLoading = false;
							this.pdfURL = this.sanitizer.bypassSecurityTrustResourceUrl( URL.createObjectURL( res ) );
						}
					},
					( err: any ) => { throw err; },
					() => {
						this.isLoading = false;
					} );

		} catch ( error ) {
			console.error( error );
			this.isLoading = false;
		}

	}
  public generateTodayPDF = async () => {
		this.isLoading = true;
		try {
			this.reportService.generateReport({
				from: getnowDate(), to: getnowDate(),
			} )
				.subscribe(
					( res: any ) => {
						if ( res ) {
							this.isLoading = false;
							this.pdfURL = this.sanitizer.bypassSecurityTrustResourceUrl( URL.createObjectURL( res ) );
						}
					},
					( err: any ) => { throw err; },
					() => {
						this.isLoading = false;
					} );

		} catch ( error ) {
			console.error( error );
			this.isLoading = false;
		}

	}
}
