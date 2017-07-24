import { Component, OnInit } from '@angular/core';
import {AuthService} from "../_service/auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm){
    this.authService.login(
      form.value.username,
      form.value.password)
      .subscribe(
        tokenData => console.log(tokenData),
        error => console.log(error)
      )
  }
}
