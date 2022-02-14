import { Component, OnInit } from '@angular/core';
import { RegisterUser } from 'app/models/registerUser';
import { timeout } from 'rxjs-compat/operator/timeout';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService:AuthService) { }

  loginUser:any={}

  ngOnInit() {
    this.authService.getCurrentUserInfo();
  }
  login(){
    this.authService.login(this.loginUser);
  }
  logOut(){
    this.authService.logOut();
  }
  get isAuthenticated(){
    return this.authService.loggedIn();
  }

}
