import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input()
  user: string;
  password: string;
  username = "9Kongpob"

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigateByUrl('dashboard/home')
  }

  // login(user) {
  //   this.username = user;
  // }


}
