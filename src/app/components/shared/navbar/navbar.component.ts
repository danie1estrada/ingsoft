import { UserService } from '../../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private authenticated: boolean = false;
  private name: string;
  private user: User = {
    id: 0,
    name: '',
    lastName: '',
    email: '',
    nontrol: 0,
    role: ''
  }

  constructor(private userService: UserService) {
    if (userService.isAuth()) {
      this.authenticated = true;
      this.user = JSON.parse(localStorage.getItem('login'));
      this.name = `${this.user.name} ${this.user.lastName}`;
    }
  }

  ngOnInit() {
  }

  private logout(): void {
    this.userService.logout();
  }
}
