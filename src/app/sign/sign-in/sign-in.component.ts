import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getDefaultUser, User } from 'models/user.model';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public fieldTextType: boolean = false;
	done = false;
  public isClicked = false;
  
  public user: User = getDefaultUser();
  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.done = true;
  }
  async passwordEye () {
		this.fieldTextType = !this.fieldTextType;
  }
  
  async doLogin () {
		try {
			this.isClicked = true;
			const isSuccessUser = await this.authService.signInUser( this.user.email, this.user.password );
			if ( isSuccessUser ) {
        this.redirectOnSuccess();
			}
			this.isClicked = false;
		} catch ( err ) {
			this.isClicked = false;
			this.messageService.add({ summary:'Error', sticky: false,life:2000, detail: err.error.error || 'Invalid email address or password' } );
			this.authService.signOutUser();
		}
  }
  private redirectOnSuccess = async () => {
      this.router.navigateByUrl( '/' );
      setTimeout(()=>{
        window.location.reload();
      },1000);
		}

}
