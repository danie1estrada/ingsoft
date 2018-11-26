import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() loginError: boolean;
  @Output() credentials: EventEmitter<any>;

  private email: string;
  private password: string;

  constructor(
    private userService: UserService,
    private router: Router) {
      this.credentials = new EventEmitter();
  }

  ngOnInit() {
  }

  public login() {
    let credentials = { email: this.email, password: this.password };

    this.userService.login(credentials)
    .then(result => {
      if (result == null) throw new Error('Invalid credentials');

      localStorage.setItem('login', JSON.stringify(result));
      this.router.navigate(['products']);
      this.loginError = false;
    })
    .catch(err => this.loginError = true);
  }
}
