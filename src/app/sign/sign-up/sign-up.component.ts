import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getDefaultUser, User } from 'models/user.model';
import { MessageService } from 'primeng/api';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public user: User = getDefaultUser();
  public fieldTextType: boolean = false;
  done = false;
  public isLoading = 0;
  confirmPassword = '';

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.done = true;
  }

  checkMatching() {
    if (!!this.user.password && !!this.confirmPassword && this.user.password !== this.confirmPassword) {
      return true;
    }
    return false;
  }
  async passwordEye() {
    this.fieldTextType = !this.fieldTextType;
  }

  signupRequest() {
    if (!this.user.email) {
      this.messageService.add({ summary: 'Error', sticky: false, life: 2000, detail: 'Type your email first..' });
    } else if (!this.user.password) {
      this.messageService.add({ summary: 'Error', sticky: false, life: 2000, detail: 'You Cannot signup without password!' });
    } else if (!this.user.name) {
      this.messageService.add({ summary: 'Error', sticky: false, life: 2000, detail: 'You Cannot signup without name!' });
    } else if (!this.confirmPassword) {
      this.messageService.add({ summary: 'Error', sticky: false, life: 2000, detail: 'Type password confimation' });
    } else if (this.user.password !== this.confirmPassword) {
      this.messageService.add({ summary: 'Error', sticky: false, life: 2000, detail: 'Password doesn\'t match' });
    } else {
      this.SignUp(this.user);
    }
  }

  private SignUp = async (user: User) => {
    this.isLoading = 1;
    try {
      const result = await this.userService.createUser(user);
      this.router.navigateByUrl( '/signIn' );
    } catch (error) {
      this.messageService.add({ summary: 'Error', sticky: false, life: 2000, detail: error.error.error || 'Sign Up Faild..' });
    }
    finally {
      this.isLoading = 0;
    }

  }
}
