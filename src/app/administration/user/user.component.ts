import { Component, OnInit } from '@angular/core';
import { User } from 'models/user.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UserService } from 'src/app/sign/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public users: User[]= [];

  constructor(
    private modalService: BsModalService,
    private userService: UserService,
  ) { }

  async ngOnInit() {
    this.users = await this.userService.getUsers();
  }

  userDetalis(user: User) {
    const initialState = {
			data: user,
		};
		this.modalService.show( '', { class: 'modal-xl', backdrop: 'static', keyboard: true, initialState } );
  }
}
