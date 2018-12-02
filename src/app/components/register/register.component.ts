import { UserService } from '../../services/user/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() registerError: boolean;

  private userData = {
    nControl: '',
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  private register(): void {
    console.log(this.userData);

    if (this.userData.password != this.userData.confirmPassword) {
      this.registerError = true;
    } else {
      this.userService.register(this.userData)
      .then(result => {
        localStorage.setItem('session', JSON.stringify(result));
        this.router.navigate(['products']);
        this.registerError = false;
      })
      .catch(err => console.log(err));
    }
  }

}
