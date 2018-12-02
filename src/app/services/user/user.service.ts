import { GlobalRequestService } from '../global-request/global-request.service';
import { User } from '../../models/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string = 'api/users';

  constructor(
    private globalRequest: GlobalRequestService,
    private router: Router) { }

  public getUserID() {
    return JSON.parse(localStorage.getItem('session')).id;
  }

  public login(credentials: any) {
    return this.globalRequest.post(credentials, `${this.url}/login`);
  }

  public logout() {
    localStorage.removeItem('session');
    this.router.navigate(['login']);
  }

  public register(data: any) {
    return this.globalRequest.post(data, `${this.url}/register`);
  }

  public isAuth(): boolean {
    let login = JSON.parse(localStorage.getItem('session'));

    return login ? true : false;
  }

  public checkAuth(): void {
    if (!this.isAuth()) {
      this.router.navigate(['session']);
    }
  }
}
