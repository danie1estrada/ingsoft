import { UserService } from '../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  private registerError: boolean = false;
  private loginError: boolean = false;

  constructor(
    private userService: UserService,
    private router : Router) {
      if (userService.isAuth()) {
        router.navigate(['products']);
      }
  }

  ngOnInit() {
  }
}
